from django.db import models
from django import forms
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _
from django.conf import settings
from datetime import date

class User(AbstractUser):
    username = models.CharField(max_length = 50, blank = True, null = True, unique = True)
    email = models.EmailField(_('email address'), unique = True)
    budget=models.IntegerField()
    amount_spent=models.IntegerField(null=True)
    USERNAME_FIELD = 'email'
    password=models.CharField(max_length=200)
    friends=models.ManyToManyField("User",blank=True,null=True, related_name='friend')
    REQUIRED_FIELDS = ['username', 'password', 'budget','amount_spent']
    
class friend_request(models.Model):
    from_user=models.ForeignKey(
        User,related_name='from_user', on_delete=models.CASCADE)
    to_user=models.ForeignKey(
        User,related_name='to_user', on_delete=models.CASCADE)
    