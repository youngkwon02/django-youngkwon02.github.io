from django.shortcuts import render


def sns_view(request):
  return render(request, 'sns.html')
