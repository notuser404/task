import React, { useState } from 'react';
import './AddTask.css'
import Button from './Button';

const AddTask = ({handleTaskAddition}) => {
  const [inputData, setInputData] = useState('')

  const handleInputChange = (e) => {
    setInputData(e.target.value)
  }

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData)
    setInputData('')
  }

  return (
    <>
      <div className="addTaskContainer">
      <input 
      onChange={handleInputChange} 
      type="text" 
      className="addTaskInput"
      value={inputData}
      />
      <div className="addTaskButtonContainer">
       <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
      </div>
    </>
  );
}
 
export default AddTask;