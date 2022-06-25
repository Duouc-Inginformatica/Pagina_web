from django.shortcuts import redirect, render
from api.models import Prueba
from api.forms import PruebaForm

def index(request):
    Pruebas = Prueba.objects.all()
    return render(request, 'index.html' , {'Pruebas': Pruebas})

def cliente(request):
    return render(request, 'cliente.html')

def compras(request):
    return render(request, 'compras.html')

def consolas(request):
    return render(request, 'consolas.html')

def juegos(request):
    return render(request, 'juegos.html')

def registro(request):
    return render(request, 'registro.html')

def registrar(request):
    idusuario=request.POST['idusuario']
    correo=request.POST['correo']
    nombre=request.POST['nombre']
    rut=request.POST['rut']
    pwd=request.POST['pwd']
    registrados=Prueba.objects.create(idusuario=idusuario, correo=correo, nombre=nombre, rut=rut, pwd=pwd)
    return redirect('index')

def eliminar(request, id):
    remover = Prueba.objects.get(id=id)
    remover.delete()
    return redirect('index')

def crud(request):
    return render(request, 'crud.html')