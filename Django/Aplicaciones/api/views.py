from django.shortcuts import render
from django.views import View
from .models import Task
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
        print(jd)
        print("jd")
        tasks=list(Task.objects.filter(id=id).values())
        if len(tasks)>0:
            task=Task.objects.get(id=id)
            task.name=jd['name']
            task.status=jd['status']
            task.save()
            datos={'message':"Success"}
        else: datos={'message':"Task not found"}
        return JsonResponse(datos)

    def delete(self, request, id):
        tasks=list(Task.objects.filter(id=id).values())
        if len(tasks)>0:
            Task.objects.filter(id=id).delete()
            datos={'message':"Success"}
        else: datos={'message':"Task not found"}
        return JsonResponse(datos)
