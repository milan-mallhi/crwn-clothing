import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALu91b3wMzNxhxknowXtAIh5_KeioUkWY",
  authDomain: "crwn-clothing-db-b973a.firebaseapp.com",
  projectId: "crwn-clothing-db-b973a",
  storageBucket: "crwn-clothing-db-b973a.appspot.com",
  messagingSenderId: "224333049488",
  appId: "1:224333049488:web:c6860ade4ea225b423b215",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

 

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("error created by the user", error.message);
    }
  }

  return userSnapshot
};
