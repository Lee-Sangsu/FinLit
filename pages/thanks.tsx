import Link from 'next/link';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { userInfoState } from '../states/userInfo';
import styles from '../styles/SignUp.module.css';
import { addUser } from '../utilities/firebaseProvider';

export default function Thanks () {
    const userInfo = useRecoilValue(userInfoState);
    const [goback, setGoback] = React.useState(false);

    const saveInfo = ( ) => {
        addUser(userInfo);
        console.log(userInfo)
        setTimeout(() => {
            setGoback(true);
        }, 600)
    };
  
  return (<>
      <main className={styles.main_container}>
        {goback ? <>
        <Link href="/">Go back to Index Page</Link>
        </>:<>
        <h2 className={styles.title}>{`Thank you!`}</h2>
        <h1 className={styles.findescription}>{`We think you are perfect match for our platform!`}</h1>
        {/* <p className={styles.description}>{`We are going to analyse the relevant opportunities and financial contents based on the information that you input.`}</p> */}

        <div className={styles.finish}>
            <h4 style={{
                marginBottom: 16,
                textAlign: 'center' 
            }}>{"Click here to start the signup process and learn more about our offers."}</h4> 
            <button onClick={saveInfo} name="0-next" className={styles.finbutton}>{`Proceed to Sign Up`}</button>
            {/* <p className={styles.description} >{`If not, you can close this website. It won't save your information.`}</p> */}
        </div></>
        }

      </main>
    </>)
};