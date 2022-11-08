import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from 'styles/Navigation.module.css';

export const Navigation: NextPage = ( ) => {

    return (
        <header>
            <nav className={styles.nav}>
                <Link className={styles.home_nav} href="/">
                    <span className={styles.span}>it's</span>
                    <Image src={"/images/fine-logo.png"} alt="Go to index page" placeholder="empty" width={60} height={42} />
                </Link>
                <div className={styles.ndiv}>
                    <a className={styles.a}>
                        <Image src="/static/images/account.svg" alt="My account" width={22} height={23.1} />
                    </a>
                    <button className={styles.button} onClick={() => console.log("Expand Menu list")}>
                        <a className={styles.a}>
                            <Image src={"/static/images/hamburger-btn.svg"} alt="Shopping Bag" width={24} height={20.35} />
                        </a>
                    </button>
                </div>
            </nav>
            <style jsx>{`

            `}</style>
        </header>)
}