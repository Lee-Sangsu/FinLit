import Image from 'next/image'

export default function Landing ({nextLandingIndex, styles}: any) {
  return (<main className={styles.main_landing}>
        <div className={styles.landing_logo}>
          <Image src="/images/finefish-logo.png" alt="Get money!" width={230} height={189} />
        </div>

        <p className={styles.title}>
          Your Financial Guide, <br />
          <label>fine.fish</label>
        </p>

        {/* <div className={styles.next_landing_btn}>
          <button className={styles.button} name="0-next" onClick={nextLandingIndex}>{`Click here to next >>`}</button>
        </div> */}
    </main>)
};