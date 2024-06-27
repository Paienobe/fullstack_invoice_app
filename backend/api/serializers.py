from rest_framework import serializers
from .models import Item, Address, Invoice, User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["name", "email", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        password = validated_data.pop("password")
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user


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

    def __init__(self, *args, **kwargs):
        super(InvoiceSerializer, self).__init__(*args, **kwargs)
        self.fields.pop("created_by", None)

    def create(self, validated_data):
        sender_address = validated_data.pop("sender_address")
        client_address = validated_data.pop("client_address")
        items = validated_data.pop("items")
        request = self.context.get("request")

        sender_address_instance = Address.objects.create(**sender_address)
        client_address_instance = Address.objects.create(**client_address)

        invoice = Invoice.objects.create(
            client_address=client_address_instance, sender_address=sender_address_instance, created_by=request.user, **validated_data)

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


# JWT SERIALIZERS
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
