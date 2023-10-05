import { Link } from "react-router-dom";

import styles from './Menu.module.scss'

export default function Menu() {
  return(
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <ul className={styles.navigationList}>
          <li className={styles.navigationListItem}>
            <Link to="/">Inicio</Link>
          </li>
          <li className={styles.navigationListItem}>
            <Link to="/calendario">Calendario</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}