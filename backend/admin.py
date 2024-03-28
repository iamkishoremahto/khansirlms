from django.contrib import admin
from .models import User


class UserTable(admin.ModelAdmin):
    list_display = ["email","name","password"]

admin.site.register(User,UserTable)

    
