# Generated by Django 5.0.6 on 2024-06-22 19:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_alter_address_id_alter_invoice_id_alter_item_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='invoice',
            name='id',
            field=models.CharField(default='O_QLPG', max_length=6, primary_key=True, serialize=False),
        ),
    ]
