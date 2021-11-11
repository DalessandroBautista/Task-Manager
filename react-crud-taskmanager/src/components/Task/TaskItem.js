import React from 'react';
import TaskList from './TaskList';
//import { useHistory } from "react-router-dom";

const TaskItem = ({ task, listTasks }) => {
  //  const history = useHistory();
    // console.log(props.company);
     //console.log(company);
    return(
        <div className="col-md-4">
            <div className="card card-body">
                <h3 className="card-title"> {task.name}</h3>
            </div>
        </div>
    ) 
};
export default TaskItem;