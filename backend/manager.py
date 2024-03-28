from django.contrib.auth.models import UserManager

class _UserManager(UserManager):

    def create_user(self, email, password = None, **extra_fields):

        if not email:
            raise ValueError("email is required")
        email = self.normalize_email(email)
        user = self.model(email = email, **extra_fields)
        user.set_password(password)
        user.save()
        return user
    
    def create_superuser(self, email, password = None, **extra_fields):

        extra_fields.setdefault("is_staff",True)
        extra_fields.setdefault("is_superuser",True)

        if not extra_fields.get("is_staff"):
            raise ValueError("is_staff is required")
        if not extra_fields.get("is_superuser"):
            raise ValueError("is_superuser is required")
        
        return self.create_user(email= email, password= password, **extra_fields)