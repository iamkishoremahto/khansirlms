from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from datetime import datetime


class UserTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls,user):
        token = super().get_token(user)

        token["name"] = user.name
        token["email"] = user.email
        token["phone"] =user.phone
        token["created_at"] = user.created_at.isoformat()
        token["last_login"] = user.last_login.isoformat()
        token["is_staff"] = user.is_staff
        token["is_superuser"] = user.is_superuser
        token["is_active"] = user.is_active

        return token