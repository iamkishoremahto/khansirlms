from django.contrib import admin
from .models import *


class UserTable(admin.ModelAdmin):
    list_display = [field.name for field in User._meta.fields if field.name != 'password']

class TypeTable(admin.ModelAdmin):
    list_display = [field.name for field in Type._meta.fields]

class CategoryTable(admin.ModelAdmin):
    list_display = [field.name for field in Category._meta.fields]

class TeacherTable(admin.ModelAdmin):
    list_display = [field.name for field in Teacher._meta.fields]

class CourseTable(admin.ModelAdmin):
    list_display = [field.name for field in Course._meta.fields]

class CourseAssignToTeacherTable(admin.ModelAdmin):
    list_display = [field.name for field in CourseAssignToTeacher._meta.fields]

class CourseVideosTable(admin.ModelAdmin):
    list_display = [field.name for field in CourseVideos._meta.fields]
admin.site.register(User,UserTable)
admin.site.register(Type,TypeTable)
admin.site.register(Category,CategoryTable)
admin.site.register(Teacher,TeacherTable)
admin.site.register(Course,CourseTable)
admin.site.register(CourseAssignToTeacher,CourseAssignToTeacherTable)
admin.site.register(CourseVideos,CourseVideosTable)

    
