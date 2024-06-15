from django.db import models
from .utils import make_invoice_id

# Create your models here.


class Item(models.Model):
    name = models.CharField(max_length=256)
    quantity = models.IntegerField()
    price = models.DecimalField(decimal_places=2, max_digits=15)
    total = models.DecimalField(decimal_places=2, max_digits=15)

    def __str__(self):
        return self.name


class Address(models.Model):
    street = models.CharField(max_length=256)
    city = models.CharField(max_length=128)
    post_code = models.CharField(max_length=20)
    country = models.CharField(max_length=64)

    def __str__(self):
        return f"{self.street}, {self.city}"


class Invoice(models.Model):
    STATUS_CHOICES = {
        "PAID": "Paid",
        "PENDING": "Pending",
        "DRAFT": "Draft",
    }
    id = models.CharField(
        max_length=6, default=make_invoice_id(), primary_key=True)
    created_at = models.DateField(auto_now=True)
    payment_due = models.DateField()
    description = models.CharField(max_length=128)
    payment_terms = models.IntegerField()
    client_name = models.CharField(max_length=256)
    client_email = models.EmailField()
    status = models.CharField(max_length=7, choices=STATUS_CHOICES)
    sender_address = models.ForeignKey(
        Address, on_delete=models.CASCADE, related_name="sender_address")
    client_address = models.ForeignKey(
        Address, on_delete=models.CASCADE, related_name="client_address")
    items = models.ManyToManyField(Item)
    total = models.DecimalField(decimal_places=2, max_digits=15)

    def __str__(self):
        return f"{self.client_name} Invoice"
