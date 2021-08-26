from . import views
from django.urls import path

urlpatterns = [
  path('', views.sns_view, name="sns"),
]
