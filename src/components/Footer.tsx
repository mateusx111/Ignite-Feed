import styles from './Footer.module.css';

export function Footer() {
  return(
    <footer className={styles.footer}>
      <p>
        Developed with
        <span id={styles.heart}> &hearts; </span> by 
        <a href="https://www.linkedin.com/in/mateus-s-santos-8b89791b6/"> Mateus S. Santos</a>
      </p>
    </footer>
  )
}