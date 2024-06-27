from rest_framework import generics, status
from .models import Invoice, User
from .serializers import InvoiceSerializer, UserSerializer, CustomTokenObtainPairSerializer
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.settings import api_settings
from rest_framework_simplejwt.exceptions import TokenError, InvalidToken
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework.response import Response


class RegistrationView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class InvoiceListCreateView(generics.ListCreateAPIView):
    queryset = Invoice.objects.all()
    serializer_class = InvoiceSerializer

    def get_queryset(self):
        params_dict = dict(self.request.query_params)
        status_params = params_dict.get("status")
        filtered_invoices = Invoice.objects.none()
        if status_params is None:
            return filtered_invoices
        for param in status_params:
            queryset = Invoice.objects.filter(
                created_by=self.request.user, status=param)
            filtered_invoices = filtered_invoices.union(queryset)
        return filtered_invoices


class SingleInvoiceView(generics.RetrieveAPIView):
    queryset = Invoice.objects.all()
    serializer_class = InvoiceSerializer


class DeleteInvoiceView(generics.DestroyAPIView):
    queryset = Invoice.objects.all()
    serializer_class = InvoiceSerializer


class UpdateInvoiceView(generics.UpdateAPIView):
    queryset = Invoice.objects.all()
    serializer_class = InvoiceSerializer


# JWT VIEWS
class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
        except Exception as e:
            return Response({"detail": str(e)}, status=status.HTTP_401_UNAUTHORIZED)
        data = serializer.validated_data
        response = Response(data, status=status.HTTP_200_OK)
        refresh_token = data["refresh"]
        cookie_max_age = api_settings.REFRESH_TOKEN_LIFETIME.total_seconds()
        response.set_cookie(
            key="invoice_app_refresh_token",
            value=refresh_token,
            httponly=True,
            secure=True,
            max_age=cookie_max_age,
            samesite="None",
            path="/"
        )
        del data["refresh"]
        return response


class CustomTokenRefreshView(TokenRefreshView):
    def post(self, request, *args, **kwargs):
        refresh_token = request.COOKIES.get("invoice_app_refresh_token")
        if refresh_token is None:
            return Response({"detail": "Refresh token not provided in cookies."})
        serializer = self.get_serializer(data={"refresh": refresh_token})
        try:
            serializer.is_valid(raise_exception=True)
        except TokenError as e:
            raise InvalidToken(e.args[0])
        return Response(serializer.validated_data)
