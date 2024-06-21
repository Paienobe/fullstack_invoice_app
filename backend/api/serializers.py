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
    sender_address = AddressSerializer()
    client_address = AddressSerializer()
    items = ItemSerializer(many=True)

    class Meta:
        model = Invoice
        fields = "__all__"

    def create(self, validated_data):
        sender_address = validated_data.pop("sender_address")
        client_address = validated_data.pop("client_address")
        items = validated_data.pop("items")

        sender_address_instance = Address.objects.create(**sender_address)
        client_address_instance = Address.objects.create(**client_address)

        invoice = Invoice.objects.create(
            client_address=client_address_instance, sender_address=sender_address_instance, **validated_data)

        items_instances = []
        for item in items:
            item_instance = Item.objects.create(**item)
            items_instances.append(item_instance)

        invoice.items.set(objs=items_instances)

        return invoice

    def update(self, instance, validated_data):
        return super().update(instance, validated_data)
