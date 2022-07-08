from django.urls import URLPattern, path
from rest_usuario.views import usuarios, detalle_usuario

urlpatterns = [
    path('usuarios', usuarios, name="usuarios"),
    path('detalle_usuario/<id>', detalle_usuario, name="detalle_usuario"),
] 