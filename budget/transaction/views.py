from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .models import tran
from django.contrib.auth.decorators import login_required
from .serializers import transerializer
from rest_framework import permissions

# Create your views here.
@api_view(['GET'])
def index(request):
    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/transaction/create/',
            'method': 'POST',
            'body': {
            'id': 0,
            'date': 0,
            'category': '',
            'amount':''},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]
    return Response(routes)


@api_view(['GET'])
def gettransactionlist(request):
    obj=tran.objects.all()
    serializer= transerializer(obj, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def gettransaction(request, pk):
    obj=tran.objects.get(id=pk)
    serializer= transerializer(obj,many=False)
    return Response(serializer.data)


@api_view(['PUT'])
def update(request, pk):
    data=request.data
    obj=tran.objects.get(id=pk)
    serializer= transerializer(instance=obj,data=data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def delete(request, pk):
    obj=tran.objects.get(id=pk)
    obj.delete()
    return Response("Transaction closed")

@api_view(['GET','POST'])
def create(request):
    data= request.data
    d=data['inputs']
    t= tran(
        id=d['id'],
        date=d['date'],
        category=d['category'],
        amount=d['amount']
    )
    t.save()
    serializer= transerializer(t,many=False)
    return Response(serializer.data)


def filter(request):
    transactions=tran.objects.all()
    cat_filter=request.GET.get('category')
    date_filter=request.GET.get('date')
    if cat_filter !='' and cat_filter is not None:
        transactions=transactions.filter(category__icontains=cat_filter)
    
    if date_filter !='' and date_filter is not None:
        transactions=transactions.filter(date__icontains=date_filter)
    context={
        'queryset' : transactions
    }
    return render(request, "f.html",context)


@api_view(['GET','POST'])
def filterapi(request):
    transactions=tran.objects.all()
    d= request.data['inputs']
    cat_filter=d['category']
    date_filter=d['date']
    if cat_filter !='' and cat_filter is not None:
        transactions=transactions.filter(category__icontains=cat_filter)
    
    if date_filter !='' and date_filter is not None:
        transactions=transactions.filter(date__icontains=date_filter)
    context={
        'queryset' : transactions
    }
    serializer= transerializer(transactions,many=True)
    return JsonResponse(serializer.data,safe=False)
    


@api_view(['POST'])
def addpayee(request,pk):
    key=int(pk)
    transaction=tran.objects.get(id=key)
    data= request.data
    d=data['inputs']
    lt=""
    for obj in d:
        lt=lt+" "+obj
        print(obj)
    transaction.payees=lt
    transaction.save()
    return HttpResponse("Added payees")