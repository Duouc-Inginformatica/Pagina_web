from msilib.schema import Class
from django import forms
from api.models import Prueba

class Pruebaform(forms.ModelForm):
    class Meta:
        model = Prueba
        fields = ['idusuario' ,'correo' ,'nombre' ,'apellido' ,'rut' ,'pwd']