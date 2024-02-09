# Generated by Django 3.2.23 on 2024-02-08 19:56

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('mapper', '0014_alter_find_location'),
    ]

    operations = [
        migrations.AlterField(
            model_name='find',
            name='author',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='finds', to=settings.AUTH_USER_MODEL),
        ),
    ]