# Generated by Django 5.0.3 on 2024-03-30 05:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0005_category_type_user_is_teacher_course_purchasedcourse_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='category',
            field=models.CharField(max_length=150, unique=True),
        ),
        migrations.AlterField(
            model_name='course',
            name='title',
            field=models.CharField(max_length=255, unique=True),
        ),
        migrations.AlterField(
            model_name='type',
            name='type',
            field=models.CharField(max_length=150, unique=True),
        ),
    ]
