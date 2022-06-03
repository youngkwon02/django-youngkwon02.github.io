from django.contrib import admin
from django.conf.urls import include
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/', include('project.urls')),
    path('gallery/', include('gallery.urls')),
    path('sns/', include('sns.urls')),
    path('', include('aboutme.urls')),
]
