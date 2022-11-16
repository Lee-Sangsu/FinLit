import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from 'styles/Navigation.module.css';
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { darkModeState } from "../../states/darkMode";

export const Navigation: NextPage = ( ) => {
    const [darkMode, setDarkMode] = useRecoilState(darkModeState);

    const modeMe = (e:any) => {
        setDarkMode(!!e.matches);
    };

    useEffect(() => {
        const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    
        setDarkMode(matchMedia.matches);
        matchMedia.addEventListener("change", modeMe);

        return () => matchMedia.removeEventListener("change", modeMe);
    }, []);


    return (
        <header>
            <nav className={styles.nav}>
                <Link className={styles.home_nav} href="/">
                    <Image src={darkMode ? "/images/dark/fine-logo-light.svg" :"/images/finefish-logo.svg"} alt="Go to index page" placeholder="empty" width={67.51} height={56} />
                </Link>
                <div className={styles.ndiv}>
                    <Link href="/sign-up" className={styles.a}>
                        <Image src={darkMode ? "/images/dark/account-light.svg" :"/images/account.svg"} alt="My account" width={24} height={25.26} />
                    </Link>
                    <button className={styles.button} onClick={() => console.log("Expand Menu list")}>
                        <a className={styles.a}>
                            <Image src={darkMode ? "/images/dark/hamburger-btn-light.svg" : "/images/hamburger-btn.svg"} alt="Expand menu list" width={24} height={20.35} />
                        </a>
                    </button>
                </div>
            </nav>
            <style jsx>{`

            `}</style>
        </header>)
}