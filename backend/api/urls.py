from django.urls import path
from . import views

urlpatterns = [
    path("invoice/", views.InvoiceListCreateView.as_view()),
    path("invoice/<str:pk>/", views.SingleInvoiceView.as_view()),
    path("invoice/<str:pk>/delete/", views.DeleteInvoiceView.as_view())
]
