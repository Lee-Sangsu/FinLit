import { getUser } from '@notionhq/client/build/src/api-endpoints';
import React from 'react';
import SignUp from '../components/SignUp/SignUp';
import styles from '../styles/Home.module.css';
import { createUser, getUsers } from '../utilities/notionProvider';
import handler from './api/hello';

export default function SignUpPage () {
  const [personalInfo, setPersonalInfo] = React.useState({
    name: "",
    incomesource: "",
    keyExpenditure: []
  });

  const [landingIndex, setLandingIndex] = React.useState(0);

  const nextLandingIndex = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // createUser('sangsoo', 'sangsu.lee@alumni.mondragon.edu');
    getUsers();
    if (event.currentTarget.name === "0-next") {
      setLandingIndex(1);
    } else if (event.currentTarget.name === "1-next") {
      setLandingIndex(2);
    }
  };

  return (<>
      <SignUp personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} nextLandingIndex={nextLandingIndex}  />
    </>)
};