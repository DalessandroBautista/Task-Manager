const TASKS_API_URL="http://127.0.0.1:8000/tasks/"
const FOLDERS_API_URL="http://127.0.0.1:8000/folders/"

export const listTasks = async () =>{
    return await fetch(TASKS_API_URL);
};

export const listForlders = async () =>{
    return await fetch(FOLDER_API_URL);
};