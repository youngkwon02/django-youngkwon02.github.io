from django.shortcuts import render


def main_view(request):
  return render(request, 'index.html')


def ironmain_view(request):
  return render(request, 'ironman.html')


def starfall_view(request):
  return render(request, 'starfall.html')


def slingshot_view(request):
  return render(request, 'slingshot.html')


def acid_world_view(request):
  return render(request, 'acid-world.html')


def sunset_view(request):
  return render(request, 'sunset.html')