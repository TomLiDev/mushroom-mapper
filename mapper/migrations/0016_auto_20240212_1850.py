# Generated by Django 3.2.23 on 2024-02-12 18:50

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('mapper', '0015_alter_find_author'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='name',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='find',
            name='likes',
            field=models.ManyToManyField(blank=True, related_name='find_likes', to=settings.AUTH_USER_MODEL),
        ),
    ]
