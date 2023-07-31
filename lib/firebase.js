import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAldB99EgMkG2Z3WEflWFA1TvcKD-AIIQg",
  authDomain: "y5-clone.firebaseapp.com",
  projectId: "y5-clone",
  storageBucket: "y5-clone.appspot.com",
  messagingSenderId: "484478177315",
  appId: "1:484478177315:web:a427320c69df7a0188a196",
};

// Initialize firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize auth && firestore with the 'firebaseApp' property
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp)
export default firebaseApp;
