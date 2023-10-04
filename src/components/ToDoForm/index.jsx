import styles from './ToDoForm.module.scss'

export default function ToDoForm() {
  return(
    <section>
      <h2 className={styles.secundaryTitle}>Register a new task</h2>
      <form action="post" className={styles.taskForm}>
        <label htmlFor="taskName" className={styles.taskFormLabel}>
          Digite o titulo da tarefa:
          <input type="text" placeholder='Titulo da tarefa' id='taskName' className={styles.taskFormInput}/>
        </label>
        <label htmlFor="taskDate" className={styles.taskFormLabel}>
          Digite a data da tarefa:
          <input type="date" id="taskDate" className={styles.taskFormInput}/>
        </label>
        <button className={styles.taskFormButton}>Salvar</button>
      </form>
    </section>
  )
}