import { BsCalendarDate, BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs'

import { BiTimeFive } from 'react-icons/bi'

import styles from './ToDoList.module.scss'


export default function ToDoList() {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <div className={styles.itemNameAndInput}>
          <input type="checkbox" name="" id="checkToDo" />
          <h3>Nome da tarefa</h3>
        </div>
        <div className={styles.itemDateAndTime}>
          <div>
            <BsCalendarDate />
            <p>
              11/11/1111
            </p>
          </div>
          <div>
          <BiTimeFive />
          <p>1h</p>
          </div>
        </div>
        <div className={styles.itemActions}>
          <button className={styles.edit}><BsFillPencilFill /></button>
          <button className={styles.delete}><BsFillTrashFill /></button>
        </div>
      </li>
    </ul> 
  )
}