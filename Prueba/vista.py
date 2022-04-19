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