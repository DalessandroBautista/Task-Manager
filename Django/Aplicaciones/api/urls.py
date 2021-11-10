from django.urls import path
from .views import TaskView
urlpatterns = [
    path('tasks/', TaskView.as_view(), name="tasks_list"),
    path('folders/', TaskView.as_view(), name="folders_list"),
    path('folders/<int:id>', TaskView.as_view(), name="folder")
]