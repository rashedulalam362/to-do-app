
import { useState } from "react"
import './App.css'
import { Task } from "./components/Task";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from "react-bootstrap";



function App() {
  const [newTask, setNewTask] = useState("");
  const [todoList, setTodoList]=useState([])


const handleChange =(e)=>{
  setNewTask(e.target.value)
}

const addTask = () => {
  const task = {
    id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
    taskName: newTask,
    completed: false,
  };

  setTodoList([...todoList, task]);
};

const completedTask = (id) => {
  setTodoList((prevTodoList) =>
    prevTodoList.map((task) =>
    task.id === id ? { ...task, completed: true } : task
    )
  );
  console.log(id);
};



  const deleteTask=(id)=>{
   
  //  setTodoList( todoList.filter(task=>task.id !==id))
  setTodoList((prevTodoList) => prevTodoList.filter((task) => task.id !== id));
  }
  return (
  <div >

     
   <div className="add-Task ">
    
     <input type="text" placeholder="Type here" onChange={handleChange}  />
     
     <button className="btn btn-info" onClick={addTask}>AddTask</button>
    
    </div>
    
     <div className="to-list">
    
   {
    todoList.map((task)=>{
      return(
        <Task key={task.id}
        taskName={task.taskName}
        id={task.id}
        deleteTask={deleteTask}
        completed={task.completed}
        completedTask={completedTask}

        />
      
      )
    })
   }

     </div>
  
     
  

  </div>
  )
}

export default App



