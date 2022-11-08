import Image from 'next/image'

export default function LandingIndex ({nextLandingIndex, styles}: any) {
  return (<>
        <Image src="/images/marketing.png" alt="Get money!" width={305} height={305} />

        <p className={styles.title}>
          Figure out the amount of money you need and we guide you on how to make it!
        </p>

        <div className={styles.next_landing_btn}>
          <button className={styles.button} name="0-next" onClick={nextLandingIndex}>{`Click here to next >>`}</button>
        </div>
    </>)
};