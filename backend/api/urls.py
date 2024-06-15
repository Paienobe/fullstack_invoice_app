from django.urls import path
from . import views

urlpatterns = [
    path("invoice/", views.InvoiceListView.as_view()),
    path("invoice/<str:pk>/", views.SingleInvoiceView.as_view())
]
