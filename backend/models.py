from django.db import models
from .manager import _UserManager
from django.contrib.auth.models import AbstractUser
from django.utils import timezone
from datetime import timedelta



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
    is_teacher = models.BooleanField(default=False)
#  isdsfasdfasdfadsfsdfsgdfgsdadsf
    USERNAME_FIELD = "email"

    REQUIRED_FIELDS = ["name"]

    objects = _UserManager()

    def __str__(self):
        return self.name

class Type(models.Model):
    type = models.CharField(max_length=150,unique = True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.type


class Category(models.Model):
    category = models.CharField(max_length=150,unique = True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.category


class Teacher(models.Model):
    
    teacher = models.OneToOneField(User, on_delete=models.CASCADE, related_name='teacher_profile', unique = True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.teacher.name

    




class Course(models.Model):
    title = models.CharField(max_length=255,unique = True)
    course_type = models.ForeignKey(Type, on_delete= models.CASCADE, name = "course_type")
    medium = models.CharField(max_length = 150)
    fee = models.IntegerField(null = True)
    discounted_fee = models.IntegerField(null = True)
    is_free = models.BooleanField(default=False)
    thumbnail = models.URLField()
    duration = models.IntegerField(null = True)
    description = models.TextField(null = True)
    course_category = models.ForeignKey(Category, on_delete= models.CASCADE, name = "course_category")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class CourseVideos(models.Model):
    course = models.ForeignKey(Course, on_delete= models.CASCADE)
    video = models.URLField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class CourseAssignToTeacher(models.Model):
    course = models.ForeignKey(Course, on_delete= models.CASCADE, name = "course")
    teacher = models.ForeignKey(Teacher, on_delete= models.CASCADE, name ="teacher")
    assignedDate = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)



class PurchasedCourse(models.Model):
    course = models.ForeignKey(Course, on_delete= models.CASCADE, name= "course")
    user = models.ForeignKey(User, on_delete= models.CASCADE, name = "user")
    purchasedDate = models.DateTimeField(auto_now_add = True)
    validity = models.IntegerField()
    expireDate = models.DateTimeField(null=True, blank=True)
    updatedDate = models.DateTimeField(auto_now = True)

    def save(self, *args, **kwargs):
        if not self.pk: 
            self.expireDate = self.purchasedDate + timedelta(days=self.validity * 365)  
        super().save(*args, **kwargs)
 
    


    






