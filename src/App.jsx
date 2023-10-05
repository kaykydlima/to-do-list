import { useState } from 'react';
import { ToDoContext } from './contexts/toDoContext'

import ToDoRoutes from "./routes/ToDoRoutes";
import { getTask } from './services/toDoServices';
import { useEffect } from 'react';

export default function App() {
  const [tasks, setTasks] = useState([])
  
  useEffect(() => {
    getTask().then(resp => setTasks(resp))
  }, [])

  return(
    <ToDoContext.Provider value={{tasks}}>

      <ToDoRoutes />
    </ToDoContext.Provider>
  )
}