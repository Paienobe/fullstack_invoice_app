# Generated by Django 5.0.6 on 2024-06-13 20:50

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_invoice_client_address_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='invoice',
            name='client_address',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='client_address', to='api.address'),
        ),
        migrations.AlterField(
            model_name='invoice',
            name='sender_address',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sender_address', to='api.address'),
        ),
    ]
