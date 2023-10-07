import { createContext, useEffect, useState } from 'react';
import { getTask } from '../services/toDoServices';

export const ToDoContext = createContext();

export function ToDoProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    getTask()
      .then((resp) => setTasks(resp))
      .catch((error) => {
        console.error(error);
        alert(
          'Não foi possível consultar suas tarefas, por favor, retorne novamente mais tarde!'
        );
      });
  };

  useEffect(() => {
    const pollingInterval = setInterval(fetchTasks, 2000);

    fetchTasks();

    return () => {
      clearInterval(pollingInterval);
    };
  }, []);

  return (
    <ToDoContext.Provider value={{ tasks, setTasks }}>
      {children}
    </ToDoContext.Provider>
  );
}
