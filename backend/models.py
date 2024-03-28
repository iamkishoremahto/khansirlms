from django.db import models
from .manager import _UserManager
from django.contrib.auth.models import AbstractUser



class User(AbstractUser):

    username = None
    first_name = None
    last_name = None
    date_joined = None
    
    user_permissions = None
    groups = None

    name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True)
    phone = models.CharField(max_length=16)
    password = models.CharField(max_length = 150)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    USERNAME_FIELD = "email"

    REQUIRED_FIELDS = ["name"]

    objects = _UserManager()

    def __str__(self):
        return self.name

class Course(models.Model):
    title = models.CharField(max_length=255)
    



