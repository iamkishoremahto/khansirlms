from django.shortcuts import render
from .models import *
from .serializer import *
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, IsAdminUser,IsAuthenticatedOrReadOnly
from .permissions import IsTeacherOrReadOnly,IsAdminOrReadOnly


class UserRetrieveCreate(generics.ListCreateAPIView):
    permission_classes = [IsAdminUser]

    queryset = User.objects.all()
    serializer_class = UserSerializer

class TypeRetrieveCreate(generics.ListCreateAPIView):

    permission_classes = [IsAdminOrReadOnly]
    queryset = Type.objects.all()
    serializer_class = TypeSerializer

class TypeRetrieveUpdateDelete(generics.RetrieveUpdateDestroyAPIView):

    permission_classes = [IsAdminOrReadOnly]
    
    queryset = Type.objects.all()
    serializer_class = TypeSerializer

class CategoryRetrieveCreate(generics.ListCreateAPIView):
    permission_classes = [IsAdminOrReadOnly]

    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryRetrieveUpdateDelete(generics.RetrieveUpdateDestroyAPIView):

    permission_classes = [IsAdminOrReadOnly]

    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class TeacherRetrieveCreate(generics.ListCreateAPIView):
  
    permission_classes = [IsAdminOrReadOnly]

    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer

class TeacherRetrieveUpdateDelete(generics.RetrieveUpdateDestroyAPIView):

    permission_classes = [IsAdminOrReadOnly]

    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer

class CourseRetrieveCreate(generics.ListCreateAPIView):

    permission_classes = [IsTeacherOrReadOnly]
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class CourseRetrieveUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated,IsTeacherOrReadOnly]
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class CourseAssignRetrieveCreate(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated,IsTeacherOrReadOnly]

    queryset = CourseAssignToTeacher.objects.all()
    serializer_class = CourseAssignToTeacherSerializer

class CourseAssignRetrieveUpdateDelete(generics.RetrieveUpdateDestroyAPIView):

    permission_classes = [IsAuthenticated, IsTeacherOrReadOnly]

    queryset = CourseAssignToTeacher.objects.all()
    serializer_class = CourseAssignToTeacherSerializer

class PurchasedCourseRetrieveCreate(generics.ListCreateAPIView):


    queryset = PurchasedCourse.objects.all()
    serializer_class = PurchasedCourseSerializer

class PurchasedCourseRetrieveUpdateDelete(generics.RetrieveUpdateDestroyAPIView):

    queryset = PurchasedCourse.objects.all()
    serializer_class = PurchasedCourseSerializer

    
