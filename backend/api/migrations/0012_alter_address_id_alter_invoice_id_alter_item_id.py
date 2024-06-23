# Generated by Django 5.0.6 on 2024-06-22 19:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_alter_invoice_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='address',
            name='id',
            field=models.UUIDField(auto_created=True, primary_key=True, serialize=False, unique=True),
        ),
        migrations.AlterField(
            model_name='invoice',
            name='id',
            field=models.CharField(default='QI3CVQ', max_length=6, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='item',
            name='id',
            field=models.UUIDField(auto_created=True, primary_key=True, serialize=False, unique=True),
        ),
    ]
