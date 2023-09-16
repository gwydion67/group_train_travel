from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from .models import *
from .serialize import *
from django.db.models import Q
from django.contrib.auth.hashers import make_password
from rest_framework import status

@api_view(['GET'])
def getRoutes(request):
    
    return Response('Hello')

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    
    
    def validate(self, attrs):
        data = super().validate(attrs)
        serializer = UserserializerwithToken(self.user).data

        for k, v in serializer.items():
            data[k] = v

        return data
      

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
            email= data['username'],
            password = make_password(data['password']),
        )
        serializer = UserserializerwithToken(user, many = False)
        return Response(serializer.data)
    except:
        message = {'detail': 'User with same email and/or username already exits'}
        return Response(message, status = status.HTTP_400_BAD_REQUEST)
    

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createTripCard(request):
    user = request.user
    data = request.data
    print('hi')
    # 1 - Card already exists user.tripcard_set.filter(tripCompleted=False).exists()
    alreadyExists = user.tripcard_set.all()
    
    if alreadyExists:
        content = {'detail': 'You already posted'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)
   

    # 2 - Create card
    else:
        card = tripcard.objects.create(
            user=user,
            From = data['From'], 
            To = data['To'] , 
            Date = data['Date']
        )

        serializer = tripCardSerializer(card , many= False )

  
        return Response(serializer.data)
    

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createAlreadyBookedCard(request):
    user = request.user
    data = request.data

    # 1 - Card already exists
    alreadyExists = user.alreadyBookedCard_set.filter(tripCompleted=False).exists()
    
    if alreadyExists:
        content = {'detail': 'You already posted'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)
   

    # 2 - Create card
    else:
        review = alreadybookedcard.objects.create(
            user=user,
            TrainNumber = data['TrainNumber'], 
            alreadyInTrain = data['alreadyInTrain'] , 
            From = data['From'], 
            To = data['To'] , 
            Date = data['Date']
        )

  
        return Response('Card Added')
    

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteAlreadyBookedCard(request, pk):
    user = request.user
    card = user.alreadybookedcard_set.filter(tripCompleted=False)
    if card : 
        card.delete()
        return Response('Post Deleted')
    return Response('No post Found')

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteTripCard(request):
    user = request.user
    card = user.tripcard_set.filter(tripCompleted=False)
    if card : 
        card.delete()
        return Response('Post Deleted')
    return Response('No post Found')


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateTripCard(request, pk):
    data = request.data
    user = request.user
    card = user.tripcard_set.filter(tripCompleted=False)
    if card : 
        card.From = data.From 
        card.To = data.To 
        card.Date = data.Date 
        card.tripCompleted  = data.tripCompleted  


        card.save()

        serializer =tripCardSerializer(card, many=False)
        return Response(serializer.data)
    return('Some error in Server')


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateAlreadyBookedCard(request):
    data = request.data
    user = request.user
    card = user.alreadybookedcard_set.filter(tripCompleted=False)
    if card : 
        card.TrainNumber = data.TrainNumber 
        card.alreadyInTrain = data.alreadyInTrain 
        card.From = data.From 
        card.To = data.To 
        card.Date = data.Date 
        card.tripCompleted  = data.tripCompleted  


        card.save()

        serializer =alreadyBookedCardSerializer(card, many=False)
        return Response(serializer.data)
    return('Some error in Server')



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getTripCards(request):
    print('f')
    card = tripcard.objects.all()
    serializer = tripCardSerializer(card, many=True)
    return Response(serializer.data)



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getAlreadyBookedCards(request):
    card = alreadybookedcard.objects.filter(tripCompleted=False)
    serializer = alreadyBookedCardSerializer(card, many=True)
    return Response(serializer.data)






