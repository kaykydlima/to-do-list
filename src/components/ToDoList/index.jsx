import styles from './ToDoList.module.scss'
import ToDoItem from '../ToDoItem'


export default function ToDoList() {
  return (
    <ul className={styles.list}>
      <ToDoItem />
    </ul> 
  )
}