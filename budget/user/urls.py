from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken import views
from .views import Registeruser, getusers, send_request, accept_request
urlpatterns = [
    
    path('register/',Registeruser),
    path('list/',getusers),
    path('send/<str:pk>/',send_request)
]
