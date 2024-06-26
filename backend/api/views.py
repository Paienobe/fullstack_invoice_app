from rest_framework import generics
from .models import Invoice, User
from .serializers import InvoiceSerializer, UserSerializer
from rest_framework.permissions import AllowAny


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
