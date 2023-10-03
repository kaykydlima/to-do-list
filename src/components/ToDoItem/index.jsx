import { BsCalendarDate, BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs'

import styles from './ToDoItem.module.scss'

export default function ToDoItem() {
  return (
    <li className={styles.listItem}>
      <div className={styles.itemNameAndInput}>
        <input type="checkbox" name="" id="checkToDo" />
        <h3>Nome da tarefa</h3>
      </div>
      <div className={styles.itemDate}>
        <div>
          <BsCalendarDate />
          <p>11/11/1111</p>
        </div>
      </div>
      <div className={styles.itemActions}>
        <button className={styles.edit}><BsFillPencilFill /></button>
        <button className={styles.delete}><BsFillTrashFill /></button>
      </div>
    </li>
  )
}