from django.urls import path, include
from .views import index, create

app_name = 'board'

urlpatterns = [
    path('', index, name = "index"),
    path('create/', create, name = "create")
]