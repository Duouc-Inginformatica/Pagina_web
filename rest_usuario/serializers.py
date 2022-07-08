from rest_framework import serializers
from api.models import Prueba

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model= Prueba
        fields = ['idusuario','correo','nombre', 'apellido','rut','pwd']


        