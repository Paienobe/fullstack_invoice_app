from django.contrib import admin
from .models import User, Item, Address, Invoice
# Register your models here.
admin.site.register(User)
admin.site.register(Item)
admin.site.register(Address)
admin.site.register(Invoice)
