# Generated by Django 5.0.3 on 2024-04-06 09:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0008_coursevideos_video_description_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='duration',
            field=models.TimeField(null=True),
        ),
    ]
