# Generated by Django 5.0.3 on 2024-04-06 09:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0010_alter_coursevideos_video_duration'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='duration',
            field=models.DurationField(null=True),
        ),
    ]
