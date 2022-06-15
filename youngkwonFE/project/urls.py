from . import views
from django.urls import path

urlpatterns = [
  path('', views.main_view, name="main"),
  path('ironman/', views.ironmain_view, name="ironman"),
  path('starfall/', views.starfall_view, name="starfall"),
  path('slingshot/', views.slingshot_view, name="slingshot"),
  path('acidWorld/', views.acid_world_view, name="acidWorld"),
  path('sunset/', views.sunset_view, name="sunset"),
  path('spark/', views.spark_view, name="spark"),
]
