import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Learn React',
    },
    {
        id: 2,
        text: 'Make Vet Appointment',
    },
    {
        id: 3,
        text: 'Water Plants',
    }
    ])

  return (
    <div className='container'>

      <Header title='To-Do List'/>
      <AddTask />
      <Tasks tasks={tasks}/>
    </div>
  )
}

export default App
