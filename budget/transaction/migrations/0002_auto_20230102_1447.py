# Generated by Django 3.2.5 on 2023-01-02 09:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('transaction', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='tran',
            name='updated',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='tran',
            name='amount',
            field=models.BigIntegerField(),
        ),
        migrations.AlterField(
            model_name='tran',
            name='date',
            field=models.DateTimeField(),
        ),
    ]
