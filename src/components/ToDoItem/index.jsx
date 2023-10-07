import { BsCalendarDate, BsFillTrashFill, BsPlusLg } from 'react-icons/bs'

import styles from './ToDoItem.module.scss'
import { deleteTask as deleteTaskService, endTask as endTaskService } from '../../services/toDoServices'
import { useState } from 'react'

export default function ToDoItem({ task, deleteTask }) {

  const [taskFinish, setTaskFinish] = useState([task.finish])

  function convertedDate() {
    const date = new Date(task.initialDate)

    const day = verifyIfDataIsUnder10(date.getDate())
    const month = verifyIfDataIsUnder10(date.getDate())
    const year = date.getFullYear()

    return `${day}/${month}/${year}`

  }

  function verifyIfDataIsUnder10(date) {
    return date < 10 ? `0${date}` : date
  }

  function verifyQuantityCharactersInTaskName() {
    const name = [task.name]
    return [...name].length >= 12 ? name.substring(0, 10) + "..." : name
  }

  function removeTask() {
    deleteTaskService(task.id)
      .then(() => deleteTask())
      .catch(error => console.error(error))
  }

  function finishTaks() {
    const newTaskFinish = !taskFinish
    setTaskFinish(newTaskFinish)

    endTaskService(task.id, {
      id: task.id,
      name: task.name,
      initialDate: task.initialDate,
      finalDate: task.finalDate,
      finish: newTaskFinish
    })
      .then(resp => {
        resp
      })
      .catch(error => {
        alert('Não foi possível finalizar a terafa.')
        console.error(error)
      })
  }

  return (
    <li className={styles.listItem}>
      <div className={`${styles.itemName} ${task.finish ? styles.finish : ''}`}>
        <h3>{verifyQuantityCharactersInTaskName()}</h3>
      </div>
      <div className={`${styles.itemDate} ${task.finish ? styles.finish : ''}`}>
        <div>
          <BsCalendarDate />
          <p>{convertedDate()}</p>
        </div>
      </div>
      <div className={styles.itemActions}>
        <button className={styles.finish} onClick={finishTaks}><BsPlusLg /></button>
        <button className={styles.delete} onClick={removeTask}><BsFillTrashFill /></button>
      </div>
    </li>
  )
}