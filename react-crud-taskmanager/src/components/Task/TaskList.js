import React, { useEffect, useState } from "react";

// Components:
import TaskItem from "./TaskItem";

import * as TaskServer from "./TaskServer";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const listTask = async () => {
    try {
      const res = await TaskServer.listTask();
      const data = await res.json();
      setTasks(data.tasks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listTask();
  }, []);

  return (
    <div className="row">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;