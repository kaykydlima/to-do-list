import { useState } from 'react'
import styles from './ToDoForm.module.scss'

import { v4 as uuidv4 } from 'uuid'
import { createTask } from '../../services/toDoServices'

export default function ToDoForm() {
  const [taskName, setTaskName] = useState('')
  const [taskInitialDate, setTaskInicialDate] = useState('')
  const [taskFinalDate, setTaskFinalDate] = useState('')

  function handleTaskName(event) {
    setTaskName(event.target.value)
  }

  function handleInicialTaskDate(event) {
    setTaskInicialDate(event.target.value)
  }

  function handleFinalTaskDate(event) {
    setTaskFinalDate(event.target.value)
  }
  
  const task = {
    id: uuidv4(),
    name: taskName,
    initialDate: taskInitialDate,
    finalDate: taskFinalDate
  }

  async function saveTask(event) {
    event.preventDefault()
    try {
      await createTask(task)
    } catch(error) {
      console.log(error)
    }

    setTaskFinalDate('')
    setTaskInicialDate('')
    setTaskName('')
  }

  return(
    <section>
      <h2 className={styles.secundaryTitle}>Register a new task</h2>
      <form action="post" className={styles.taskForm}>
        <label htmlFor="taskName" className={styles.taskFormLabel}>
          Digite o titulo da tarefa:
          <input value={taskName} type="text" placeholder='Titulo da tarefa' id='taskName' onChange={handleTaskName} className={styles.taskFormInput}/>
        </label>
        <label htmlFor="taskDate" className={styles.taskFormLabel}>
          Digite a data para o inicio da tarefa:
          <input value={taskInitialDate} type="datetime-local" id="taskDate" className={styles.taskFormInput} onChange={handleInicialTaskDate}/>
        </label>
        <label htmlFor="taskDate" className={styles.taskFormLabel}>
          Digite a data para o final da tarefa:
          <input value={taskFinalDate} type="datetime-local" id="taskDate" className={styles.taskFormInput} onChange={handleFinalTaskDate}/>
        </label>
        <button className={styles.taskFormButton} onClick={saveTask}>Salvar</button>
      </form>
    </section>
  )
}