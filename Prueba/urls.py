"""Prueba URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from Prueba.vista import index, cliente, compras, consolas, juegos, portatiles

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name='home'),
    path('home', index, name='home'),
    path('compras', compras, name='compras'),
    path('consolas', consolas, name='consolas'),
    path('juegos', juegos, name='juegos'),
    path('portatiles', portatiles, name='portatiles'),
    path('cliente', cliente, name='cliente'),
]