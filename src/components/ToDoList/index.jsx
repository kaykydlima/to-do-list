import styles from './ToDoList.module.scss'

export default function ToDoList() {
  return (
    <>
      <h1 className={styles.principalTitle}>
        To Do List
      </h1>
      <ul className={styles.list}>
        <p className={styles.withoutTasks}>Não há tarefas para realizar</p>
      </ul>
    </> 
  )
}