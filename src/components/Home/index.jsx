import ToDoForm from '../ToDoForm'
import ToDoList from '../ToDoList'
import styles from './Home.module.scss'

export default function Home() {  
  return(
    <main className={styles.home}>
      <h1 className={styles.principalTitle}>
        Lista de tarefas
      </h1>
      <ToDoForm />
      <ToDoList />
    </main>
  )
}