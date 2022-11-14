import React from 'react';
import styles from '../../styles/SignUp.module.css';
import { BasicInfoInput } from './BasicInfo';

export default function SignUp ({personalInfo, setPersonalInfo, nextLandingIndex}: any) {
  React.useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
    async function success(pos:any) {
      const crd = pos.coords;
      const countryApiURL = `https://www.latlong.net/c/?lat=${crd.latitude}&long=${crd.longitude}`;
      const countryInfo = await fetch(countryApiURL, {
        headers: {
          'Access-Control-Allow-Origin': "*"
        }
      });

      console.log(countryInfo);
      // console.log(`Latitude : ${crd.latitude}`);
      // console.log(`Longitude: ${crd.longitude}`);
      // console.log(`More or less ${crd.accuracy} meters.`);
    }
    
    function error(err:any) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };
    
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [])

  const inputPersonalInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.currentTarget.name === "name") {
          setPersonalInfo({...personalInfo,
              name: event.currentTarget.value
          })
      } else if (event.currentTarget.name === "email") {
          setPersonalInfo({ ...personalInfo,
              email: event.currentTarget.value
          })
      } else if (event.currentTarget.name === "age") {
          setPersonalInfo({ ...personalInfo,
            age: event.currentTarget.value
          })
    }
  };

  return (<>
      <main className={styles.main_container}>
        <h2 className={styles.title}>{`We’ll follow simple steps to figure out how much money you need.`}</h2>
        {/* {landingIndex === 0 ? <WelcomePage nextLandingIndex={nextLandingIndex} styles={styles} />
        : <WelcomePage nextLandingIndex={nextLandingIndex} styles={styles} />} */}
        <form> {/* 8px margin-top */}
            <BasicInfoInput styles={styles} personalInfo={personalInfo} inputPersonalInfo={inputPersonalInfo} />
        </form>

        <div className={styles.next_landing_btn}>
          <button onClick={nextLandingIndex} className={styles.button}>{`Continue`}</button>
        </div>
      </main>
    </>)
};