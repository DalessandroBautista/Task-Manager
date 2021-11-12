import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";
import * as TaskServer from "./TaskServer";
import { useHistory, useParams } from "react-router-dom";

const TaskItem = ({ task, listTasks }) => {
  const history = useHistory();
  const initialState = { id: 0, name: "", status: false};
  const params = useParams();

  const [setTask] = useState(initialState);
  //Invoca a la funcion deleteTask de TaskServer pasandole el id de la tarea a eliminar.
  const handleDelete = async (taskId) => {

    await TaskServer.deleteTask(taskId);
    listTasks();
  };
  const handleCheckBox = async (taskId) => {

    try {
        const res = await TaskServer.getTask(taskId);
    
        const data = await res.json();

        let task=data.tasks;
        let Vstatus= task.status;
        Vstatus= (!Vstatus);
        task.status= Vstatus;
        await TaskServer.updateTask(params.id, task);
      } catch (error) {
        console.log(error);
      }
      history.push("/");
      listTasks();
    
  };
  return (
    <div className="col-md-4">
      <div className="card card-body">
        <h3 className="card-title">
         <input type="checkbox" onChange={() => task.id && handleCheckBox(task.id)} />
          {task.name}
          <button
            onClick={() => history.push(`/updateTask/${task.id}`)}
            className="ms-2 btn btn-sm btn-info"
          >
            Update
          </button>
        </h3>
        <button
          onClick={() => task.id && handleDelete(task.id)}
          className="btn btn-danger my-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
  };
export default TaskItem;
