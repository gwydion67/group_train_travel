from django.db import models
from django.contrib.auth.models import User
# Create your models here.



class tripcard(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    From = models.CharField(max_length=200, null=True, blank=True)
    To =  models.CharField(max_length=200, null=True, blank=True)
    Date = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    reqToJoin  = models.ManyToManyField('self' , blank=True)
    _id = models.AutoField(primary_key=True, editable=False)
    tripCompleted = models.BooleanField(default=False)
    def __str__(self):
        nm = self.user.email + f"{self._id}"
        return nm 
    
    
class alreadybookedcard(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    TrainNumber = models.CharField(max_length=200, null=True, blank=True)
    alreadyInTrain = models.BooleanField(default=False)
    From = models.CharField(max_length=200, null=True, blank=True)
    To =  models.CharField(max_length=200, null=True, blank=True)
    seatInfo = models.CharField(max_length=200, null=True, blank=True)
    reqToJoin  = models.ManyToManyField('self' , blank=True)
    Date = models.DateTimeField(auto_now_add=False , null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)
    tripCompleted = models.BooleanField(default=False)
    def __str__(self):
        nm = self.user.email + f"{self._id}"
        return nm 
    
class travelgroup (models.Model) : 
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    tripCardMember = models.ManyToManyField(tripcard, related_name='trip_cards')
    alreadyBookedCardMember = models.ManyToManyField(alreadybookedcard, related_name='alreadyBooked_cards')
    _id = models.AutoField(primary_key=True, editable=False)
    tripCompleted = models.BooleanField(default=False)
    def __str__(self):
        nm = self.user.email + f"{self._id}"
        return nm 
