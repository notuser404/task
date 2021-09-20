import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid'
import "./components/Tasks"
import "./App.css"
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {

  const [tasks, inserirTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler livros',
      completed: true,
    }
  ])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) return {...task, completed: !task.completed}

      return task
    })

    inserirTasks(newTasks)
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks, 
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false
    }
  
  ]


    inserirTasks(newTasks)
  }

  return (
    <>
    <div className="container">
      <AddTask handleTaskAddition={handleTaskAddition} />
      <Tasks tasks={tasks} handleTaskClick={handleTaskClick}/>
    </div>
    </>
  )

}

export default App;