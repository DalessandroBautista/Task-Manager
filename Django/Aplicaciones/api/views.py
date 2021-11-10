from django.shortcuts import render
from django.views import View
from .models import Task, Folder
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
import json
# Create your views here.
class TaskView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
    def get(self, request):
        tasks=list(Task.objects.values())
        if len(tasks)>0:
            datos={'message':"Success", 'tasks':tasks}
        else: datos={'message':"Task not found"}
        return JsonResponse(datos)
    def post(self, request):
        jd=json.loads(request.body)
        Task.objects.create(name=jd['name'])
        datos={'message':"Success"}
        return JsonResponse(datos)

    def put(self, request):
        pass

    def delete(self, request):
        pass

class FolderView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
    def get(self, request):
        tasks=list(Task.objects.values())
        if len(tasks)>0:
            datos={'message':"Success", 'tasks':tasks}
        else: datos={'message':"Task not found"}
        return JsonResponse(datos)
    def post(self, request):
        jd=json.loads(request.body)
        Task.objects.create(name=jd['name'])
        datos={'message':"Success"}
        return JsonResponse(datos)

    def put(self, request):
        pass

    def delete(self, request):
        pass