from rest_framework import generics
from .models import Invoice
from .serializers import InvoiceSerializer
from rest_framework.response import Response
from rest_framework import status


class InvoiceView(generics.ListCreateAPIView):
    queryset = Invoice.objects.all()
    serializer_class = InvoiceSerializer
