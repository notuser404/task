import React, { useState } from "react";
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

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks, 
      {
        title: taskTitle,
        id: Math.random(10),
        completed: false
    }
  
  ]

    inserirTasks(newTasks)
  }

  return (
    <>
    <div className="container">
      <AddTask handleTaskAddition={handleTaskAddition} />
      <Tasks tasks={tasks}/>
    </div>
    </>
  )

}

export default App;