// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3o_SnOnO1yCEU1MjoV5noSHYuZ40QDtc",
  authDomain: "fine-fish.firebaseapp.com",
  projectId: "fine-fish",
  storageBucket: "fine-fish.appspot.com",
  messagingSenderId: "223677693969",
  appId: "1:223677693969:web:7dbebe6883b47cfc3cb1b0",
  measurementId: "G-9TWN3NBCRL"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
// const analytics = getAnalytics(firebaseApp);

export async function addUser(data: any) {
    try {
        const docRef = await addDoc(collection(db, "users"), data);
        window.alert("Our platform is still being developed. Check back again soon!")
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
};

export async function addPage(data: any) {
    try {
        const docRef = await addDoc(collection(db, "page-check"), data);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
};