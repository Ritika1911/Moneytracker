from django.urls import path
from .views import index,gettransactionlist,gettransaction,update,delete,create,filterapi,addpayee
urlpatterns = [
    path('routes/',index),
    path('transaction/',gettransactionlist),
    path('transaction/<str:pk>/',gettransaction),
    path('transaction/<str:pk>/update',update),
    path('transaction/<str:pk>/delete',delete),
    path('transaction/create',create),
    path('transaction/filter',filterapi),
    path('transaction/addpayee/<str:pk>',addpayee),
]
