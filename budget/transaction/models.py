from django.db import models
# Create your models here.
from django_mysql.models import ListCharField
from django.db.models import CharField, Model

class tran(models.Model):
    id=models.BigIntegerField(null=False, blank=False,primary_key=True)
    amount =models.BigIntegerField()
    category= models.CharField(max_length=100)
    date = models.BigIntegerField()
    payees=models.CharField(max_length=250,blank=True,null=True)
    
    

    

    
