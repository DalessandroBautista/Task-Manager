import React from 'react';
import TaskList from './TaskList';
import * as TaskServer from "./TaskServer";
import { useHistory } from "react-router-dom";

const TaskItem = ({ task, listTasks }) => {
    const history = useHistory();
    const handleDelete = async (taskId) => {
        console.log(taskId);
        
        await TaskServer.deleteTask(taskId);
        console.log("222");
        listTasks();
    };
    return(
        <div className="col-md-4">
            <div className="card card-body">
            <h3 className="card-title">
          {task.name}
          <button onClick={() => history.push(`/updateTask/${task.id}`)} className="ms-2 btn btn-sm btn-info">
            Update
          </button>
        </h3>
                <button onClick={() => task.id && handleDelete(task.id)} className="btn btn-danger my-2">
          Delete
        </button>
            </div>
        </div>
    ) 
};
export default TaskItem;