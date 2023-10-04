import styles from './ToDoList.module.scss'

export default function ToDoList() {
  return (
    <ul className={styles.list}>
      <p className={styles.withoutTasks}>Não há tarefas para realizar</p>
    </ul>
  )
}