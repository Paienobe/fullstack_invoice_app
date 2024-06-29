from typing import Any, Dict
from django.urls import path
from . import views


urlpatterns = [
    path("", views.IndexView.as_view()),

    path("auth/register/", views.RegistrationView.as_view()),
    path("auth/login/", views.CustomTokenObtainPairView.as_view()),
    path("auth/token/refresh/", views.CustomTokenRefreshView.as_view()),

    path("invoice/", views.InvoiceListCreateView.as_view()),
    path("invoice/<str:pk>/", views.SingleInvoiceView.as_view()),
    path("invoice/<str:pk>/delete/", views.DeleteInvoiceView.as_view()),
    path("invoice/<str:pk>/edit/", views.UpdateInvoiceView.as_view())
]
