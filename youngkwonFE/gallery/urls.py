from . import views
from django.urls import path

urlpatterns = [
  path('', views.gallery_first_page, name="gallery_first"),
  path('<int:page>/', views.gallery_view, name="gallery"),
]
