// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';

import {
  getFirestore,
  doc, 
  getDoc,
  setDoc
} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABOPOQXF7lT3giUjxJHAowlucVMTJs0U4",
  authDomain: "ecommerce-clothing-db-87b57.firebaseapp.com",
  projectId: "ecommerce-clothing-db-87b57",
  storageBucket: "ecommerce-clothing-db-87b57.appspot.com",
  messagingSenderId: "732402172398",
  appId: "1:732402172398:web:1554bd45be973f211a8eff"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth(); 
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// initialize a firestore database instance
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot.exists());

  // If user data doesnot exists 
  if(!userSnapShot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    // Create and store in firestore cloud db.
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch(err) {
      console.log('Error creating the user', err.message );
    }
  }

  // if exists return it
  return userDocRef;
  
}