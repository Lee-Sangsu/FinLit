import styles from "../../styles/Home.module.css";

export function Footer () {
    return (<>
        <footer className={styles.footer}>
        <a
          href="https://merakiteam.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '} merkiteam.org
        </a>
      </footer>
      </>)
}