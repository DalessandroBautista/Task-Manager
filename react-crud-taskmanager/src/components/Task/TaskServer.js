const API_URL = "http://127.0.0.1:8000/tasks/";

export const listTask = async () => {
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

export const updateTask = async (taskId, updateTask) => {
    return await fetch(`${API_URL}${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": String(updateTask.name).trim(),
        })
    });
};

export const deleteTask = async (taskId) => {
    return await fetch(`${API_URL}${taskId}`, {
        method: 'DELETE'
    });
};
