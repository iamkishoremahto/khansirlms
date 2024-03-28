from django.shortcuts import render
from .models import *
from .serializer import *
from rest_framework import generics


class UserRetrieveCreate(generics.ListCreateAPIView):

    queryset = User.objects.all()
    serializer_class = UserSerializer
    
