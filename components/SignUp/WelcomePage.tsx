import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function WelcomePage ({nextLandingIndex, styles}: any) {

  return (<main className={styles.main}>        
        <div className={styles.guide_msg}> {/* 72px */}
            {/* <Image src="/images/finefish-logo.png" alt="Get money!" width={108} height={90} /> */}
            <h2 className={styles.title}>Welcome to fine.fish</h2>
            <p className={styles.description}>These are how it works.</p>
        </div>

        <div className={styles.instructions}>
            <section className={styles.section}>
                <h4>{`✔️ Make real money.`}</h4>
                <p className={styles.description}>{`There are many opportunities waiting for you. `}</p>
            </section>
            
            <section className={styles.section}>
                <h4>{`✔️ Manage your money step-by-step.`}</h4>
                <p className={styles.description}>{`Tips and tools inside the wallet that help you improve your daily financial life.`}</p>
            </section>
            
            <section className={styles.section}>
                <h4>{`✔️ Learn finance with real practice!`}</h4>
                <p className={styles.description}>{`Lessons that are paired with real exercises that give you monetisable rewards.`}</p>
            </section>
        </div>

        <Link href="/sign-up" className={styles.next_landing_btn}>
          <button className={styles.button}>{`Start your journey`}</button>
        </Link>
    </main>)
};