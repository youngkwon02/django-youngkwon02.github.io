from django.shortcuts import render


def main_view(request):
  return render(request, 'index.html')


def ironmain_view(request):
  return render(request, 'ironman.html')


def starfall_view(request):
  return render(request, 'starfall.html')


def slingshot_view(request):
  return render(request, 'slingshot.html')
