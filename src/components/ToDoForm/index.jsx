import { useState } from 'react'
import styles from './ToDoForm.module.scss'
import { v4 as uuidv4 } from 'uuid'
import { createTask } from '../../services/toDoServices'
import { validation } from '../../utils/validation'

export default function ToDoForm() {
  const initialDate = {
    name: '',
    initialDate: '',
    finalDate: '',
    finish: false
  }

  const [task, setTask] = useState(initialDate)
  const [errors, setErrors] = useState({})

  function handleChange(event) {
    const { name, value } = event.target
    setTask(prevTask => ({
      ...prevTask,
      [name]: value
    }))
  }

  function handleValidation() {
    setErrors(validation(task))
  }

  async function saveTask(event) {
    event.preventDefault()

    if (Object.keys(errors).length === 0) {
      const newTask = {
        id: uuidv4(),
        ...task
      }
      try {
        await createTask(newTask)
        setTask(initialDate)
        setErrors({})
      } catch (error) {
        console.error(error)
      }
    } else {
      console.error("Há erros de validação. A tarefa não será criada.")
    }
  }

  return (
    <section>
      <h2 className={styles.secundaryTitle}>Register a new task</h2>
      <form action="post" className={styles.taskForm} onSubmit={saveTask}>
        <label htmlFor="taskName" className={styles.taskFormLabel}>
          Digite o titulo da tarefa:
          <input type="text" value={task.name} name='name' placeholder='Titulo da tarefa' id='taskName' onChange={handleChange} className={styles.taskFormInput} onBlur={handleValidation} />
          {errors.name && <p className={styles.error}><strong>Erro: {errors.name}</strong></p>}
        </label>
        <label htmlFor="taskDate" className={styles.taskFormLabel}>
          Digite a data para o inicio da tarefa:
          <input type="datetime-local" value={task.initialDate} name='initialDate' id="taskDate" className={styles.taskFormInput} onChange={handleChange} onBlur={handleValidation} />
          {errors.initialDate && <p className={styles.error}><strong>Erro: {errors.initialDate}</strong></p>}
        </label>
        <label htmlFor="taskEndDate" className={styles.taskFormLabel}>
          Digite a data para o final da tarefa:
          <input type="datetime-local" value={task.finalDate} name='finalDate' id="taskEndDate" className={styles.taskFormInput} onChange={handleChange} onBlur={handleValidation} />
          {errors.finalDate && <p className={styles.error}><strong>Erro: {errors.finalDate}</strong></p>}
        </label>
        <button className={styles.taskFormButton} onClick={handleValidation}>Salvar</button>
      </form>
    </section>
  )
}
