from . import views
from django.urls import path

urlpatterns = [
  path('/<int:page>/', views.gallery_view, name="gallery"),
]
