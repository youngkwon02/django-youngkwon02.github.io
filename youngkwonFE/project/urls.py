from . import views
from django.urls import path

urlpatterns = [
  path('', views.main_view, name="main"),
  path('ironman/', views.ironmain_view, name="ironman"),
]
