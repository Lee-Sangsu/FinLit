import Link from 'next/link';
import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userInfoState } from '../../states/userInfo';
import styles from '../../styles/SignUp.module.css';
import { shuffledHobbies } from '../../utilities/hobbiesList';
import { BasicInfoInput } from './PersonalInfo';

export default function InterestsInput ({personalInfo, setPersonalInfo, nextLandingIndex}: any) {
    const [userInfoGlobal, setUserInfoGlobal] = useRecoilState(userInfoState);

   const [hobbiesList, setHobbiesList] = React.useState<string[]>([]);
   React.useEffect(() => {
       const shuffedHobbiesList = shuffledHobbies();
       setHobbiesList(shuffedHobbiesList);
   }, [])

   const [selectedHobbies, setSelectedHobbies] = React.useState<string[]>([]);

   function removeItemAtIndex(arr:string[], index:number) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }

   const addHobby = (event:React.MouseEvent<HTMLLIElement>) => {
        event.preventDefault();    
        const selectedHobby = event.currentTarget.innerHTML;
        const selectedStyle = event.currentTarget.style;
        if(selectedHobbies.length === 5) {
            // window.alert("")
            if (selectedHobbies.indexOf(selectedHobby) !== -1) {
                // Delete Item const deleteItem = () => {
                const newList = removeItemAtIndex(selectedHobbies, selectedHobbies.findIndex((listItem) => listItem === selectedHobby));
                setSelectedHobbies(newList);
                selectedStyle.border = "1px solid var(--neutral-color)";
                selectedStyle.color = "var(--neutral-color)";
                selectedStyle.background = "var(--none)";
            } else {
                console.log(selectedHobby);
            }
        } else {
            if (selectedHobbies.indexOf(selectedHobby) !== -1) {
                // Delete Item const deleteItem = () => {
                const newList = removeItemAtIndex(selectedHobbies, selectedHobbies.findIndex((listItem) => listItem === selectedHobby));
                setSelectedHobbies(newList);
                selectedStyle.border = "1px solid var(--neutral-color)";
                selectedStyle.color = "var(--neutral-color)";
                selectedStyle.background = "var(--none)";
            } else {
                selectedStyle.border = "0px";
                selectedStyle.color = "var(--light-bg)";
                selectedStyle.background = "var(--primary-color)";
                setSelectedHobbies([...selectedHobbies, selectedHobby]);
            }
        }

        console.log(selectedHobbies);
   };

   const saveInfo = () => {
    setUserInfoGlobal(personalInfo);
    setUserInfoGlobal({...personalInfo,
        interests: selectedHobbies
    });
   };

  return (<>
      <main className={styles.main_container}>
        <h2 className={styles.title}>{`What are your interests?`}</h2>
        <p className={styles.description}>{`You can get more relevant learnings and opportunities by adding your hobbies.`}</p>

        <ul className={styles.hobbies_container}> {/* 24px margin-top */}
            {hobbiesList.map((value, index) => <li onClick={addHobby} className={styles.hobby} key={index}>{value}</li>)}
        </ul>

        <Link style={{
            marginTop: '24px'
        }} href="/thanks" className={styles.next_landing_btn}>
          <button name="1-next" onClick={saveInfo} className={styles.button}>{`Continue ${selectedHobbies.length}/5`}</button>
        </Link>
      </main>
    </>)
};