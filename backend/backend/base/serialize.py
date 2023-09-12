from rest_framework import serializers
from django.contrib.auth.models import User

from rest_framework_simplejwt.tokens import RefreshToken


class Userserializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only = True)
    _id = serializers.SerializerMethodField(read_only = True)
    isAdmin = serializers.SerializerMethodField(read_only = True)
    class Meta: 
        model = User
        fields = ['id', 'username', 'email', '_id', 'name', 'isAdmin']

    def get_name(self, obj):
        return obj.username
    
    def get__id(self, obj):
        return obj.id
    
    def get_isAdmin(self, obj):
        return obj.is_staff
    


class UserserializerwithToken(Userserializer):
    token  = serializers.SerializerMethodField(read_only = True)

    class Meta:
        model= User
        fields = ['id', 'username', 'email', '_id', 'name', 'isAdmin', 'token']
    
    def get_token(self, obj):
        token  = RefreshToken.for_user(obj)
        return str(token.access_token)
