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
    path('category/',CategoryRetrieveCreate.as_view(), name='category'),
    path('teacher/',TeacherRetrieveCreate.as_view(), name='teacher'),
    path('course/',CourseRetrieveCreate.as_view(), name='course'),
    path('course-assign/',CourseAssignRetrieveCreate.as_view(), name='course-assign'),
    path('purchased-course/',PurchasedCourseRetrieveCreate.as_view(), name='purchased-course'),
]