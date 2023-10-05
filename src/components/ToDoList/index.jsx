import useToDoContext from '../../hooks/useToDoContext'
import styles from './ToDoList.module.scss'
import ToDoItem from '../ToDoItem'


export default function ToDoList() {
  const { tasks } = useToDoContext()

  return (
    <ul className={styles.list}>
      { tasks.length > 0 ? tasks.map(task => <ToDoItem task={task} key={task.id} />) : <p className={styles.withoutTasks}>Não há tarefas para realizar</p> }
    </ul>
  )
}