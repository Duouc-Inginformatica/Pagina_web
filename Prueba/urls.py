from django.conf import settings
from django.contrib import admin
from django.urls import path,include
from django.views.generic import RedirectView
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path
from Prueba.vista import index, cliente, compras, consolas, juegos, registro

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name='home'),
    path('home', index, name='home'),
    path('compras', compras, name='compras'),
    path('consolas', consolas, name='consolas'),
    path('juegos', juegos, name='juegos'),
    path('cliente', cliente, name='cliente'),
    path('registro', registro, name='registro'),
]
