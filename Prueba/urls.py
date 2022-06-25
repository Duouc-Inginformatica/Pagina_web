from django.conf import settings
from django.contrib import admin
from django.urls import path,include
from django.views.generic import RedirectView
from .vista import index, cliente, compras, consolas, juegos, registro, registrar, eliminar,crud

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name='home'),
    path('home', index, name='home'),
    path('compras', compras, name='compras'),
    path('api/', include('api.urls')),
    path('crud', crud, name='crud'),
    path('consolas', consolas, name='consolas'),
    path('juegos', juegos, name='juegos'),
    path('cliente', cliente, name='cliente'),
    path('registro', registro, name='registro'),
    path('registrar', registrar, name='registrar'),
    path('eliminar/<id>', eliminar, name='eliminar'),
]
