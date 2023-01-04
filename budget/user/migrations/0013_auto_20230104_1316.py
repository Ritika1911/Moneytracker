# Generated by Django 3.2.5 on 2023-01-04 07:46

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0012_auto_20230104_1314'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='payees',
        ),
        migrations.AddField(
            model_name='user',
            name='payees',
            field=models.ManyToManyField(blank=True, null=True, related_name='payee', to=settings.AUTH_USER_MODEL),
        ),
    ]
