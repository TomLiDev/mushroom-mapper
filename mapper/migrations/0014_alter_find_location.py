# Generated by Django 3.2.23 on 2024-02-02 14:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mapper', '0013_auto_20240202_1454'),
    ]

    operations = [
        migrations.AlterField(
            model_name='find',
            name='location',
            field=models.DecimalField(blank=True, decimal_places=16, max_digits=20, null=True),
        ),
    ]
