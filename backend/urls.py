from django.urls import path
from .views import *

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
urlpatterns = [

    path('user/', UserRetrieveCreate.as_view()),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('type/',TypeRetrieveCreate.as_view(), name='type'),
    path('type/<int:pk>',TypeRetrieveUpdateDelete.as_view(), name='type-pk'),
    path('category/<int:pk>',CategoryRetrieveUpdateDelete.as_view(), name='category-pk'),
    path('category/',CategoryRetrieveCreate.as_view(), name='category'),
    path('teacher/',TeacherRetrieveCreate.as_view(), name='teacher'),
    path('teacher/<int:pk>',TeacherRetrieveUpdateDelete.as_view(), name='teacher-pk'),
    path('course/',CourseRetrieveCreate.as_view(), name='course'),
    path('course/<int:pk>',CourseRetrieveUpdateDelete.as_view(), name='course-pk'),
    path('course-video/',CourseVideoCreateRetrieveView.as_view(), name='course-video'),
    path('course-assign/',CourseAssignRetrieveCreate.as_view(), name='course-assign'),
    path('course-assign/<int:pk>',CourseAssignRetrieveUpdateDelete.as_view(), name='course-assign-pk'),
    path('purchased-course/',PurchasedCourseRetrieveCreate.as_view(), name='purchased-course'),
    path('purchased-course/<int:pk>',PurchasedCourseRetrieveUpdateDelete.as_view(), name='purchased-course-pk'),
]