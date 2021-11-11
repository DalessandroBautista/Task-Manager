from django.urls import path
from .views import TaskView, FolderView
urlpatterns = [
    path('tasks/', TaskView.as_view(), name="tasks_list"),
    path('tasks/<int:id>', TaskView.as_view(), name="task"),
    path('folders/', FolderView.as_view(), name="folders_list"),
    path('folders/<int:id>', FolderView.as_view(), name="folder")
]