import React, {useState} from "react";

import * as TaskServer from './TaskManagerServer';
import { useEffect } from 'react/cjs/react.production.min';
const TaskList = () => {

const [tasks,setTask]=useState([])
const listTask=()=>{
    try{
        const res=TaskServer.listTasks();
        console.log(res);
    }catch(error){
        console.log(error);
    }
};
useEffect(()=>{
    listTask();
},[]);
  return (
      <div>
          {tasks.map((task)=>(
              <h2>hola</h2>
          ))}
      </div>
  );
};
export default TaskList;
