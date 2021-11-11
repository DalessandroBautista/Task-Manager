import React, { useEffect, useState } from "react";

// Components:
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";
import * as TaskServer from "./TaskServer";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const listTasks = async () => {
    try {
      const res = await TaskServer.listTasks();
      const data = await res.json();
      setTasks(data.tasks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listTasks();
  }, []);

  return (
    <div>
        <div className="row">
          {tasks.map((task) => (
          <TaskItem key={task.id} task={task} listTasks={listTasks} />
          ))}
          <TaskForm listTasks={listTasks}/>
        </div>
    </div>

  );
};

export default TaskList;