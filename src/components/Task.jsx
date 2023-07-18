




export const Task = (props) => {
  console.log(props);
  return (
    <div
      className="task "
      style={{ backgroundColor: props.completed ? "green" : "white" }}
    >
      
      <h1>{props.taskName}</h1>
       <div>
      
       <button className='compelete-btn' onClick={() => props.completedTask(props.id)}>Complete </button>

       </div>
       <div>
       <button className="delete-btn" onClick={() => props.deleteTask(props.id)}>Delete-Button </button>
       </div>
           
      
    </div>
  );
};
