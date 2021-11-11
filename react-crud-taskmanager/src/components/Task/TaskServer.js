const API_URL = "http://127.0.0.1:8000/tasks/";

export const listTasks = async () => {
    return await fetch(API_URL);
};

export const getTask = async (taskId) => {
    return await fetch(`${API_URL}${taskId}`);
};

export const registerTask = async (newTask) => {
    return await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": String(newTask.name).trim(),
        })
    });
};

export const updateTask = async (taskId, updatedTask) => {
    return await fetch(`${API_URL}${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": String(updatedTask.name).trim(),
        })
    });
};

export const deleteTask = async (taskId) => {
    return await fetch(`${API_URL}${taskId}`, {
        method: 'DELETE'
    });
};