import ToDoList from "./components/ToDoList";

import styles from './App.module.scss'

export default function App() {
  return(
    <main className={styles.app}>
      <ToDoList />
    </main>
  )
}