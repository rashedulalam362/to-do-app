import { FaTrashAlt } from 'react-icons/fa';





export const Task = (props) => {
  console.log(props);
  return (
    <div
      className=" "
      style={{ backgroundColor: props.completed ? "green" : "black" }}
    >
      
      <h3>{props.taskName}</h3>
      <div className="action">
      
      
      <button className='compelete-btn' onClick={() => props.completedTask(props.id)}>Complete  </button>

    
    
      <button className="delete-btn" onClick={() => props.deleteTask(props.id)}><FaTrashAlt/> </button>
     
      </div>
           
      
    </div>
  );
};
