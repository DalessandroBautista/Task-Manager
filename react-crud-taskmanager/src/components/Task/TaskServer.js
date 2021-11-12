const API_URL = "http://127.0.0.1:8000/tasks/";
//Obtiene la lista de tareas en la ddbb
export const listTasks = async () => {
  return await fetch(API_URL);
};
//Obtiene una tarea especifica mediante el id recibido por parametro
export const getTask = async (taskId) => {
  return await fetch(`${API_URL}${taskId}`);
};
//Registra una tarea recibida por parametro en la ddbb
export const registerTask = async (newTask) => {
  return await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: String(newTask.name).trim(),
    }),
  });
};
//Actualiza una tarea mediante el id, recibida por parametro
export const updateTask = async (taskId, updatedTask) => {
    console.log("estoy en update");
    return await fetch(`${API_URL}${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": String(updatedTask.name).trim(),
            "status": Boolean(updatedTask.status),
        })
    });
};

//Elimina una tarea mediante el id recibido por parametro
export const deleteTask = async (taskId) => {
  return await fetch(`${API_URL}${taskId}`, {
    method: "DELETE",
  });
};
