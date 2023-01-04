from django.shortcuts import render
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from .serializers import Userserializer, userializer
from rest_framework.response import Response
from django.contrib.auth.decorators import login_required
from .models import User
from django.conf import settings
from rest_framework.decorators import api_view
from django.contrib.auth import login, authenticate 
from rest_framework.authtoken.models import Token
from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import friend_request


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


@api_view(['POST'])
def Registeruser(request):
    data= request.data
    d=data['inputs']
    t= User(
        username=d['username'],
        email=d['email'],
        budget=d['budget'],
        amount_spent=d['amount_spent'],
        password=d['password'],
    )
    t.save()
    serializer= userializer(t,many=False)
    return Response(serializer.data)



    # def post(self,request):
    #     serializer=Userserializer(data=request.data)

    #     if not serializer.is_valid():
    #             Response({'status':400,'errors':serializer.errors,'message':'wrong'})
    #     if serializer.is_valid():   
    #         serializer.save()
    #     user= User.objects.get(username=serializer.data['username'])
    #     token_obj=Token.objects.get_or_create(user=user)
    #     return Response({'status':200,'payload':serializer.data,'token':str(token_obj),'message':'saved'})


class Loginuser(APIView):
    def post(self,request):
        serializer=Userserializer(data=request.data)

        if not serializer.is_valid():
                Response({'status':400,'errors':serializer.errors,'message':'wrong'})
        if serializer.is_valid():   
            serializer.save()
        user= User.objects.get(username=serializer.data['username'])
        token_obj=Token.objects.get_or_create(user=user)
        return Response({'status':200,'payload':serializer.data,'token':str(token_obj),'message':'saved'})


@api_view(['GET'])
def getusers(request):
    obj=User.objects.all()
    serializer= userializer(obj, many=True)
    return Response(serializer.data)


@api_view(['PUT'])
def send_request(request,pk):
    data= request.data
    d=data['inputs']
    print(d)
    from_user=d['user']
    to_user=pk
    friend_request = friend_request.objects.create(
        from_user=from_user,to_user=to_user)
    # if created:
    #     print("freiend request" + from_user +"to " + to_user )
    #     return Response("request sent")
    # else:
    #     return Response("request already sent")

def addpayee(request,pk):
    user=User.objects.get(username=pk)
    

def accept_request(request,requestID):
    friend_req=friend_request.objects.get(id=requestID)
    if friend_req.to_user == request.username:
        friend_req.to_user.friends.add(friend_req.from_user)
        friend_req.from_user.friends.add(friend_req.to_user)
        friend_req.delete()
        return Response("request accepted")
    else:
        return Response("request not accepted")