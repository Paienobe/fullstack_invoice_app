from rest_framework import generics
from .models import Invoice
from .serializers import InvoiceSerializer
from rest_framework.response import Response
from rest_framework import status


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
            queryset = Invoice.objects.filter(status=param)
            filtered_invoices = filtered_invoices.union(queryset)
        return filtered_invoices


class SingleInvoiceView(generics.RetrieveAPIView):
    queryset = Invoice.objects.all()
    serializer_class = InvoiceSerializer
