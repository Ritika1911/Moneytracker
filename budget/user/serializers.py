from rest_framework import serializers
from .models import *
from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model

User = get_user_model()

class userializer(ModelSerializer):
    class Meta:
        model = User
        fields='__all__'

class Userserializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username','email','budget','amount_spent','password']