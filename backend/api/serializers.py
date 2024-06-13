from rest_framework import serializers
from .models import Item, Address, Invoice


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ["name", "quantity", "price", "total"]


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ["street", "city", "post_code", "country"]


class InvoiceSerializer(serializers.ModelSerializer):
    sender_address = AddressSerializer(read_only=True)
    client_address = AddressSerializer(read_only=True)
    items = ItemSerializer(many=True)

    class Meta:
        model = Invoice
        fields = "__all__"
