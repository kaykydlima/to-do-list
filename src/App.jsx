import { useState, useEffect } from 'react';
import { ToDoContext } from './contexts/toDoContext'

import { getTask } from './services/toDoServices';
import ToDoRoutes from './routes/ToDoRoutes';
import Menu from './components/Menu';

export default function App() {
  const [tasks, setTasks] = useState([])
  
  useEffect(() => {
    getTask().then(resp => setTasks(resp)).catch(error => {
      console.error(error)
      alert('Não foi possível consultar suas tarefas, por favor, retorne novamente mais tarde!')
    })
  }, [])

  return(
    <>
    <Menu />
    <ToDoContext.Provider value={{tasks}}>
     <ToDoRoutes />
    </ToDoContext.Provider>
    </>
  )
}