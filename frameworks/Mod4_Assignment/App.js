import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Learn React',
        complete: false,
    },
    {
        id: 2,
        text: 'Make Vet Appointment',
        complete: false,
    },
    {
        id: 3,
        text: 'Water Plants',
        complete: false,
    }
    ])

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random()*100)+1
    const newTask = {id,...task}
    setTasks([...tasks, newTask])
 }

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
 }

  //mark task as complete
  const toggleComplete = (id) => {
    setTasks(tasks.map((task) => task.id === id 
    ? { ...task, complete: !task.complete } :task))
  }


  return (
    <div className='container'>

      <Header title='To-Do List'/>
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? (<Tasks tasks={tasks} 
      onDelete={deleteTask} 
      onToggle={toggleComplete}/>
      ) : (
      <h3 className='task'>No tasks to show.</h3>)}
    </div>
  )
}

export default App
