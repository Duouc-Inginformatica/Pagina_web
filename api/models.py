from django.db import models

# Create your models here.

class Prueba(models.Model):
    idusuario=models.AutoField(primary_key=True) 
    correo=models.CharField(max_length=20) 
    nombre= models.CharField(max_length=15) 
    apellido= models.CharField(max_length=15) 
    rut=models.IntegerField()
    pwd=models.CharField(max_length=15)


