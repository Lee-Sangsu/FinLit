import Image from 'next/image'
import React from 'react'

export default function LandingPerInfo ({nextLandingIndex, styles}: any) {
    const [personalInfo, setPersonalInfo] = React.useState({
        name: "",
        incomesource: "",
        keyExpenditure: []
    });

    const inputPersonalInfo = (event: React.FormEvent<HTMLInputElement>) => {
        if (event.currentTarget.name === "name") {
            setPersonalInfo({...personalInfo,
                name: event.currentTarget.value
            })
        } else if (event.currentTarget.name === "") {

        }
    }

  return (<>        
        <div className={styles.guide_msg}> {/* 72px */}
            <Image src="/images/marketing.png" alt="Get money!" width={56} height={56} />
            <p className={styles.description}>We’ll follow simple steps to figure out how much money you need.</p>
        </div>

        <form className={styles.info_form}> {/* 8px margin-top */}
            <input className={styles.input} type="text" name="name" onChange={inputPersonalInfo} />

        </form>

        <div className={styles.next_landing_btn}>
          <button className={styles.button} name="1-next" onClick={nextLandingIndex}>{`Click here to next >>`}</button>
        </div>
    </>)
};