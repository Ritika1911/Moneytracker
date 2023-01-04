from rest_framework.serializers import ModelSerializer
from .models import tran

class transerializer(ModelSerializer):
    class Meta:
        model = tran
        fields='__all__'
