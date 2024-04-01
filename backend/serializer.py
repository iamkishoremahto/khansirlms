from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):

    confirm_password = serializers.CharField(write_only = True)


    class Meta:
        model = User

        fields = "__all__"
    
    def validate(self, validated_data):

        if validated_data["password"] != validated_data["confirm_password"]:
            raise serializers.ValidationError("password does not match")
        return validated_data
    
    def create(self,validated_data):

        validated_data.pop("confirm_password")

        user = User.objects.create(**validated_data)
        user.set_password(validated_data["password"])
        user.save()
        
        if user.is_teacher:
            teacher = Teacher.objects.create(teacher = user)
            teacher.save()

        return user
    
    def update(self,instance, validated_data):
        instance.set_password(validated_data["password"])
        instance.save()
        return instance
    
class TypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Type
        fields = "__all__"

class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = "__all__"

class TeacherSerializer(serializers.ModelSerializer):

    class Meta:
        model = Teacher
        fields = "__all__"
    
class CourseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Course
        fields = "__all__"

class CourseAssignToTeacherSerializer(serializers.ModelSerializer):

    class Meta:
        model = CourseAssignToTeacher
        fields = "__all__"

class PurchasedCourseSerializer(serializers.ModelSerializer):

    class Meta:
        model = PurchasedCourse
        fields = "__all__"


