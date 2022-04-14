from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def contacto(request):
    return render(request, 'contacto.html')

def game(request):
    return render(request, 'game.html')

def portatiles(request):
    return render(request, 'portatiles.html')

def service(request):
    return render(request, 'service.html')

def session(request):
    return render(request, 'session.html')