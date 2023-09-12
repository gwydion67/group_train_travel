from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken

from .serialize import Userserializer, UserserializerwithToken

from django.contrib.auth.hashers import make_password
from rest_framework import status

@api_view(['GET'])
def getRoutes(request):
    
    return Response('Hello')

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    
    # def get_token(cls, user):
    #     token = super().get_token(user)

    #     # Add custom claims
    #     token['name'] = user.username
    #     token['message'] = "Hello Guys!!!!"
    #     # ...
    #     return token
    
    def validate(self, attrs):
        data = super().validate(attrs)
        
        # data['username'] = self.user.username
        # data['email'] = self.user.email
        serializer = UserserializerwithToken(self.user).data

        for k, v in serializer.items():
            data[k] = v

        return data
        #so here we are looping over the serialize to set the data to be return as token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

#this view is for the user profile
@api_view(['GET'])
@permission_classes([IsAdminUser])
def get_user_profile(request):
    user =  request.user
    serialized = Userserializer(user, many = False)
    return Response(serialized.data)

#this view is for viewing the users
@api_view(['GET'])
@permission_classes([IsAdminUser])
def get_user(request):
    users =  User.objects.all()
    serialized = UserserializerwithToken(users, many = True)
    return Response(serialized.data)

@api_view(['POST'])
def register(request):
    data  = request.data
    try:
        user = User.objects.create(
            username = data['username'],
            email= data['email'],
            password = make_password(data['password']),
        )
        serializer = UserserializerwithToken(user, many = False)
        return Response(serializer.data)
    except:
        message = {'detail': 'User with same email and/or username already exits'}
        return Response(message, status = status.HTTP_400_BAD_REQUEST)