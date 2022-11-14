import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from 'styles/Navigation.module.css';

export const Navigation: NextPage = ( ) => {

    return (
        <header>
            <nav className={styles.nav}>
                <Link className={styles.home_nav} href="/">
                    <Image src={"/images/finefish-logo.svg"} alt="Go to index page" placeholder="empty" width={67.51} height={56} />
                </Link>
                <div className={styles.ndiv}>
                    <a className={styles.a}>
                        <Image src="/images/account.svg" alt="My account" width={24} height={25.26} />
                    </a>
                    <button className={styles.button} onClick={() => console.log("Expand Menu list")}>
                        <a className={styles.a}>
                            <Image src={"/images/hamburger-btn.svg"} alt="Expand menu list" width={24} height={20.35} />
                        </a>
                    </button>
                </div>
            </nav>
            <style jsx>{`

            `}</style>
        </header>)
}