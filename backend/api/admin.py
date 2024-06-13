from django.contrib import admin
from .models import Item, Address, Invoice
# Register your models here.
admin.site.register(Item)
admin.site.register(Address)
admin.site.register(Invoice)
