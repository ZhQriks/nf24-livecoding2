# Generated by Django 4.1.4 on 2024-06-10 01:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("blog", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="blogpost",
            name="image_url",
            field=models.CharField(blank=True, max_length=300, null=True),
        ),
    ]
