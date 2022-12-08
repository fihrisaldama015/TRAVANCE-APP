import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, FacebookAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from "firebase/firestore";
import { GithubAuthProvider } from "firebase/auth";
import Toast from "react-native-toast-message";
const firebaseConfig = {
  apiKey: "AIzaSyDHFKQXnjQIIYSJAeknG-WOyrcE3JyPBGk",
  authDomain: "dailyvity.firebaseapp.com",
  projectId: "dailyvity",
  storageBucket: "dailyvity.appspot.com",
  messagingSenderId: "262482432002",
  appId: "1:262482432002:web:73044f5bfebe2abc72571b",
  measurementId: "G-TW7MK0LTB9",
};

const firebaseApp = initializeApp(firebaseConfig, "dailyvity-app2911");

// FIRESTORE ACCESSS
const db = getFirestore(firebaseApp);

export const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});
export const signinWithGithub = () => signInWithPopup(auth, githubProvider);
export const signinWithFacebook = () => signInWithPopup(auth, facebookProvider);
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  console.log("catch!!");
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  console.log("log out");
  await signOut(auth);
  Toast.show({
    type: "success",
    text1: "logout",
    text2: "",
    topOffset: 0,
  });
};

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);
