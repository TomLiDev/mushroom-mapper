# Generated by Django 3.2.23 on 2024-02-01 20:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mapper', '0008_auto_20240201_1943'),
    ]

    operations = [
        migrations.AlterField(
            model_name='find',
            name='habitat',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='find_habitat', to='mapper.habitat'),
        ),
        migrations.AlterField(
            model_name='find',
            name='suspected_edible',
            field=models.BooleanField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='find',
            name='suspected_poisonous',
            field=models.BooleanField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='habitat',
            name='habitat',
            field=models.CharField(blank=True, max_length=300, null=True),
        ),
    ]
