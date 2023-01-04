from django.contrib import admin
from .models import User
from .models import friend_request
# Register your models here.
admin.site.register(User)
admin.site.register(friend_request)