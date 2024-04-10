from rest_framework import permissions
from django.contrib.auth.models import AnonymousUser

class IsTeacherOrReadOnly(permissions.BasePermission):
    
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        
        if isinstance(request.user, AnonymousUser):
            return False
        
        return request.user and (request.user.is_teacher or request.user.is_staff)


class IsAdminOrReadOnly(permissions.BasePermission):

    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        
        if isinstance(request.user, AnonymousUser):
            return False

        return request.user and request.user.is_staff