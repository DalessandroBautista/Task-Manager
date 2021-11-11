import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import * as TaskServer from "./TaskServer";

const TaskForm = ({listTasks }) => {
  const history = useHistory();
  const params = useParams();

  // console.log(params);

  const initialState = { id: 0, name: "" };

  const [task, setTask] = useState(initialState);

  const handleInputChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res;
      if (!params.id) {
        res = await TaskServer.registerTask(task);
        const data = await res.json();
        if (data.message === "Success") {
          setTask(initialState);
        }
      } else {
        await TaskServer.updateTask(params.id, task);
      }
      history.push("/");
      listTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const getTask = async (taskId) => {
    try {
      const res = await TaskServer.getTask(taskId);
      const data = await res.json();
      const { name } = data.task;
      setTask({ name });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.id) {
        getTask(params.id);
    }
    // eslint-disable-next-line
  }, []);

  return (

    <div className="col-md-3 mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Task</label>
          <input type="text" name="name" value={task.name} onChange={handleInputChange} className="form-control" minLength="2" maxLength="50" autoFocus required />
          {params.id ? (
            <button type="submit" className="btn btn-block btn-primary">
              Update
            </button>
          ) : (
            <button type="submit" className="btn btn-block btn-success">
              Add
            </button>
          )}
        </div>
      </form>
    </div>
    
  );
};

export default TaskForm;