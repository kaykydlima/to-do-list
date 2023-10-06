import { BsCalendarDate, BsFillTrashFill } from 'react-icons/bs'

import styles from './ToDoItem.module.scss'
import { deleteTask as deleteTaskService } from '../../services/toDoServices'

export default function ToDoItem({ task, deleteTask }) {

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
    console.log(task.name)
    const name = [task.name] 
    return [...name].length >= 12 ? name.substring(0, 10) + "..." : name
  }

  function removeTask() {
    deleteTaskService(task.id)
      .then(() => deleteTask())
      .catch(error => console.log(error))
  }

  return (
    <li className={styles.listItem}>
      <div className={styles.itemNameAndInput}>
        <input type="checkbox" name="" id="checkToDo" />
        <h3>{ verifyQuantityCharactersInTaskName() }</h3>
      </div>
      <div className={styles.itemDate}>
        <div>
          <BsCalendarDate />
          <p>{convertedDate()}</p>
        </div>
      </div>
      <div className={styles.itemActions}>
        <button className={styles.delete} onClick={removeTask}><BsFillTrashFill /></button>
      </div>
    </li>
  )
}