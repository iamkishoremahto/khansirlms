from django.shortcuts import render
from .models import *
from .serializer import *
from rest_framework import generics


class UserRetrieveCreate(generics.ListCreateAPIView):

    queryset = User.objects.all()
    serializer_class = UserSerializer

class TypeRetrieveCreate(generics.ListCreateAPIView):

    queryset = Type.objects.all()
    serializer_class = TypeSerializer

class CategoryRetrieveCreate(generics.ListCreateAPIView):

    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class TeacherRetrieveCreate(generics.ListCreateAPIView):

    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer

class CourseRetrieveCreate(generics.ListCreateAPIView):

    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class CourseAssignRetrieveCreate(generics.ListCreateAPIView):

    queryset = CourseAssignToTeacher.objects.all()
    serializer_class = CourseAssignToTeacherSerializer

class PurchasedCourseRetrieveCreate(generics.ListCreateAPIView):

    queryset = PurchasedCourse.objects.all()
    serializer_class = PurchasedCourseSerializer

    
