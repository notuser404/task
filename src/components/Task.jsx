import React from 'react';
import './Task.css'

const Task = ({ task, handleTaskClick }) => {
  return ( 
    <>

    <div className='taskContainer' style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}>
      <div className='taskTitle' onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>
    </div>
    </>
   );
}
 
export default Task;