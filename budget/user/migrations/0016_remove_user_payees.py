# Generated by Django 3.2.5 on 2023-01-04 08:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0015_alter_user_payees'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='payees',
        ),
    ]
