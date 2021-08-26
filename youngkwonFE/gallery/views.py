from django.shortcuts import render


def gallery_first_page(request):
  return render(request, 'gallery.html', {'page': 1})


def gallery_view(request, page):
  return render(request, 'gallery.html', {'page': page})
