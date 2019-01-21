from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Board

# Create your views here.
def index(request):
    boards = Board.objects.all().order_by(
        '-id'
    )
    
    return render(request, "index.html", {
        'boards': boards
    })

def create(request):
    if request.method == 'POST':
        title = request.POST.get('title', None)
        content = request.POST.get('content', None)
        
        if title and content:
            Board.objects.create(
                title=title,
                content=content
            )
        return redirect('/')
    else:
        return render(request, "create.html")