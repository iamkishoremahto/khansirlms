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
        return user
    
    def update(self,instance, validated_data):
        instance.set_password(validated_data["password"])
        instance.save()
        return instance
    

