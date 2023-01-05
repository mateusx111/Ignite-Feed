import {PencilSimple} from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=50" alt="" 

      />

      <div className={styles.profile}>
        <Avatar  src="https://avatars.githubusercontent.com/u/67610170?v=4" />
        <strong>Mateus Souza</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimple size={17} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}