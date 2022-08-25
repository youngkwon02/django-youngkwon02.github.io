from django.contrib import admin
from django.conf.urls import include
from django.urls import path
from django.conf.urls.static import static
from . import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/', include('project.urls')),
    path('gallery/', include('gallery.urls')),
    path('sns/', include('sns.urls')),
    path('', include('aboutme.urls')),
    path('', include('pwa.urls')),
]
