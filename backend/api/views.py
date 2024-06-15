from rest_framework import generics
from .models import Invoice
from .serializers import InvoiceSerializer
from rest_framework.response import Response
from rest_framework import status


class InvoiceListView(generics.ListCreateAPIView):
    queryset = Invoice.objects.all()
    serializer_class = InvoiceSerializer


class SingleInvoiceView(generics.RetrieveAPIView):
    queryset = Invoice.objects.all()
    serializer_class = InvoiceSerializer
