import useToDoContext from '../../hooks/useToDoContext'
import styles from './ToDoList.module.scss'
import ToDoItem from '../ToDoItem'


export default function ToDoList() {
  const { tasks, setTasks } = useToDoContext()

  function deleteTask(taskRemoved) {
    const newTasks = tasks.filter(taskId => taskId !== taskRemoved.id)
    setTasks(newTasks)
  }

  return (
    <ul className={styles.list}>
      { tasks.length > 0 ? tasks.map(task => <ToDoItem task={task} deleteTask={() => deleteTask(task)} key={task.id} />) : <p className={styles.withoutTasks}>Não há tarefas para realizar</p> }
    </ul>
  )
}