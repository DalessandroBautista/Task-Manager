from django.shortcuts import render
from django.views import View
from .models import Task, Folder
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
import json
# Create your views here.
#Vista de la clase view con los métodos para crear, leer, actualizar y eliminar una Task
class TaskView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
    def get(self, request, id=0):
        if(id>0):
            tasks=list(Task.objects.filter(id=id).values())
            if len(tasks)>0:
                task=tasks[0]
                datos={'message':"Success", 'tasks':task}
            else: datos={'message':"Task not found"}
        else:
            tasks=list(Task.objects.values())
            if len(tasks)>0:
                datos={'message':"Success", 'tasks':tasks}
            else: datos={'message':"Tasks not found"}
        return JsonResponse(datos)
    def post(self, request):
        jd=json.loads(request.body)
        Task.objects.create(name=jd['name'])
        datos={'message':"Success"}
        return JsonResponse(datos)

    def put(self, request, id):
        jd=json.loads(request.body)
        tasks=list(Task.objects.filter(id=id).values())
        if len(tasks)>0:
            task=Task.objects.get(id=id)
            task.name=jd['name']
            task.save()
            datos={'message':"Success"}
        else: datos={'message':"Task not found"}
        return JsonResponse(datos)

    def delete(self, request, id):
        pass
#Vista de la clase view con los métodos para crear, leer, actualizar y eliminar una Folder
class FolderView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
    def get(self, request, id=0):
        if(id>0):
            folders=list(Folder.objects.filter(id=id).values())
            if len(folders)>0:
                folder=folders[0]
                datos={'message':"Success", 'folder':folder}
            else: datos={'message':"Folder not found"}
        else:
            folders=list(Folder.objects.values())
            if len(folders)>0:
                datos={'message':"Success", 'folders':folders}
            else: datos={'message':"Folders not found"}
        return JsonResponse(datos)
    def post(self, request):
        jd=json.loads(request.body)
        Folder.objects.create(name=jd['name'])
        datos={'message':"Success"}
        return JsonResponse(datos)

    def put(self, request, id):
        jd=json.loads(request.body)
        folders=list(Folder.objects.filter(id=id).values())
        if len(folders)>0:
            folder=Folder.objects.get(id=id)
            folder.name=jd['name']
            folder.save()
            datos={'message':"Success"}
        else: datos={'message':"Folder not found"}
        return JsonResponse(datos)
    def delete(self, request, id):
        pass
