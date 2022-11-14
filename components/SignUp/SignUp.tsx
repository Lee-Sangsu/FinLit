import React from 'react';
import LandingIndex from '../Landing'
import WelcomePage from './WelcomePage';
import styles from '../../styles/SignUp.module.css';

export default function SignUp ({personalInfo, setPersonalInfo, nextLandingIndex}: any) {
  const inputPersonalInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.currentTarget.name === "name") {
          setPersonalInfo({...personalInfo,
              name: event.currentTarget.value
          })
      } else if (event.currentTarget.name === "incomesource") {
          setPersonalInfo({ ...personalInfo,
              incomesource: event.currentTarget.value
          })
      }
  };

  return (<>
      <main className={styles.main_container}>
        <h2 className={styles.title}>{`We’ll follow simple steps to figure out how much money you need.`}</h2>
        {/* {landingIndex === 0 ? <WelcomePage nextLandingIndex={nextLandingIndex} styles={styles} />
        : <WelcomePage nextLandingIndex={nextLandingIndex} styles={styles} />} */}
        <form> {/* 8px margin-top */}
            <section className={styles.info_form}>
                <input className={styles.input} type="text" name="name" onChange={inputPersonalInfo} placeholder="First name" autoComplete='given-name' maxLength={20} />
                <label className={styles.label}>Enter your name</label> 
                <label className={styles.label}>{`${personalInfo.name.length} / 20`}</label>
            </section>
        </form>

        <div className={styles.next_landing_btn}>
          <button onClick={nextLandingIndex} className={styles.button}>{`Continue`}</button>
        </div>
      </main>
    </>)
};