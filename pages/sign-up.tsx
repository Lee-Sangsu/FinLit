import { getUser } from '@notionhq/client/build/src/api-endpoints';
import React from 'react';
import InterestsInput from '../components/SignUp/Interests';
import SignUp from '../components/SignUp/SignUp';
import styles from '../styles/Home.module.css';
import { addUser } from '../utilities/firebaseProvider';
import { createUser, getUsers } from '../utilities/notionProvider';

interface basicInfo {
    name: string,
    email: string,
    age: number | undefined,
    location: string,
    interests: Array<string>
}

export default function SignUpPage () {
  const [personalInfo, setPersonalInfo] = React.useState<basicInfo>({
    name: "",
    email: "",
    age: undefined,
    location: "",
    interests: []
  });

  const [basicInfoPage, setBasicInfoPage] = React.useState(true);

  const nextLandingIndex = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // // createUser('sangsoo', 'sangsu.lee@alumni.mondragon.edu');
    // addUser("sangsoo", "sangsu.lee@alumni.mondragon.edu");
    if (event.currentTarget.name === "0-next") {
      setBasicInfoPage(false);
    } else if (event.currentTarget.name === "1-next") {
    //   Firebase
    }
  };

  return (<>
     {basicInfoPage ? 
      <SignUp personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} nextLandingIndex={nextLandingIndex}  />:
      <InterestsInput personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} nextLandingIndex={nextLandingIndex} />
     }
    </>)
};