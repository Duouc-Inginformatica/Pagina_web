from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def cliente(request):
    return render(request, 'cliente.html')

def compras(request):
    return render(request, 'compras.html')

def consolas(request):
    return render(request, 'consolas.html')

def juegos(request):
    return render(request, 'juegos.html')

def portatiles(request):
    return render(request, 'portatiles.html')

def registro(request):
    return render(request, 'registro.html')

def cokies(request):
    return render(request, 'cokies.html')