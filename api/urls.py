from django.urls import path
from .views import PruebaView

urlpatterns = [
    path('api', PruebaView.as_view(), name='index2'),
    path('index2', PruebaView.as_view(), name='index2'),
    path('Prueba/', PruebaView.as_view(), name='Prueba_list'),
]
