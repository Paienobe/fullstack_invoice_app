from rest_framework import generics
from .models import Invoice
from .serializers import InvoiceSerializer


class InvoiceView(generics.ListAPIView):
    queryset = Invoice.objects.all()
    serializer_class = InvoiceSerializer
