from typing import Any, Dict
from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.settings import api_settings
from rest_framework.response import Response
from rest_framework import status


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def get_token(cls, user):
        token = super().get_token(user)
        token["name"] = user.name
        token["email"] = user.email
        return token

    def validate(self, attrs):
        data = super().validate(attrs)
        data.update({
            "user": {
                "id": self.user.id,
                "name": self.user.name,
                "email": self.user.email
            }
        })
        return data


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
            samesite="Lax"
        )
        del data["refresh"]
        return response


urlpatterns = [
    path("auth/register/", views.RegistrationView.as_view()),
    path("auth/login/", CustomTokenObtainPairView.as_view()),
    path("auth/token/refresh/", TokenRefreshView.as_view()),

    path("invoice/", views.InvoiceListCreateView.as_view()),
    path("invoice/<str:pk>/", views.SingleInvoiceView.as_view()),
    path("invoice/<str:pk>/delete/", views.DeleteInvoiceView.as_view()),
    path("invoice/<str:pk>/edit/", views.UpdateInvoiceView.as_view())
]
