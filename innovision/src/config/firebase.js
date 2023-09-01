import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA46fcqDtt-r8XLmSP_tLSDmBgWuK7Lflo",
  authDomain: "innovation-website-301ce.firebaseapp.com",
  projectId: "innovation-website-301ce",
  storageBucket: "innovation-website-301ce.appspot.com",
  messagingSenderId: "9817631955",
  appId: "1:9817631955:web:53fadc652b24828878b826",
  measurementId: "G-F46QRRYP1V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const signOutUser = async () => await signOut(auth);

export const createUserDocFromAuth = async (userAuth, aditionalInfo = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { email, displayName } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        email,
        displayName,
        createdAt,
        ...aditionalInfo,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return userDocRef;
};

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};

export default app;
