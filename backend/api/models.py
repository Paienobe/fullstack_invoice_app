from django.contrib.auth.models import UserManager, AbstractBaseUser, PermissionsMixin
from django.db import models
from .utils import make_invoice_id
import uuid
from django.utils import timezone

# Create your models here.


class CustomUserManager(UserManager):
    def _create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError("You have not provided a valid email address")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", False)
        extra_fields.setdefault("is_superuser", False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        return self._create_user(email, password, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(blank=True, default="", unique=True)
    name = models.CharField(max_length=256, blank=True, default="")
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(default=timezone.now)
    last_login = models.DateTimeField(blank=True, null=True)
    objects = CustomUserManager()
    USERNAME_FIELD = "email"
    EMAIL_FIELD = "email"
    REQUIRED_FIELDS = []

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"

    def get_full_name(self):
        return self.name

    def short_name(self):
        return self.name or self.email.split("@")[0]


class Item(models.Model):
    id = models.UUIDField(primary_key=True, unique=True, default=uuid.uuid4)
    name = models.CharField(max_length=256)
    quantity = models.IntegerField()
    price = models.DecimalField(decimal_places=2, max_digits=15)
    total = models.DecimalField(decimal_places=2, max_digits=15)

    def __str__(self):
        return self.name


class Address(models.Model):
    id = models.UUIDField(primary_key=True, unique=True, default=uuid.uuid4)
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
        max_length=6, default=make_invoice_id, primary_key=True)
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
