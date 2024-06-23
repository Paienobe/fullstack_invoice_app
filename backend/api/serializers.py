from rest_framework import serializers
from .models import Item, Address, Invoice


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = "__all__"
        extra_kwargs = {
            "id": {"read_only": False, "validators": []}
        }


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = "__all__"
        extra_kwargs = {
            "id": {"read_only": False, "validators": []}
        }


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
        sender_address = validated_data.pop("sender_address")
        client_address = validated_data.pop("client_address")
        items = validated_data.pop("items")

        def update_or_create_addresses(validated_address):
            updated_address, created_new_address = Address.objects.update_or_create(
                id=validated_address.get("id"),
                defaults={"street": validated_address.get("street"),
                          "city": validated_address.get("city"),
                          "post_code": validated_address.get("post_code"),
                          "country": validated_address.get("country")})
            return updated_address, created_new_address

        updated_client_addr, _ = update_or_create_addresses(client_address)
        updated_sender_addr, _ = update_or_create_addresses(sender_address)

        Invoice.objects.filter(id=validated_data.get("id")).update(
            client_address=updated_client_addr, sender_address=updated_sender_addr, **validated_data)

        updated_items = []
        for item in items:
            updated_item, _ = Item.objects.update_or_create(
                id=item.get("id"),
                defaults={"name": item.get("name"), "quantity": item.get("quantity"),
                          "price": item.get("price"), "total": item.get("total")})
            updated_items.append(updated_item)

        invoice = Invoice.objects.get(id=validated_data.get("id"))
        invoice.items.set(objs=updated_items)
        return invoice
