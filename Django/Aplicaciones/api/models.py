from django.db import models

# Create your models here.
class Folder(models.Model):
    name = models.CharField(max_length=100)
    date=models.DateTimeField
class Task(models.Model):
    name = models.CharField(max_length=100)
    date=models.DateTimeField
    status=models.BooleanField(default='False')
    folder = models.ForeignKey(Folder, on_delete=models.CASCADE, default=1)

