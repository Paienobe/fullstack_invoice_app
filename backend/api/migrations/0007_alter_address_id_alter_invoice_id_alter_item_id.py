# Generated by Django 5.0.6 on 2024-06-22 19:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_alter_address_id_alter_invoice_id_alter_item_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='address',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='invoice',
            name='id',
            field=models.CharField(default='40BP-W', max_length=6, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='item',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]