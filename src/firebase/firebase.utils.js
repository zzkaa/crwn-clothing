import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBFEMjolO98arpjwI7ye3z4ypqJnPspkdI",
  authDomain: "crwn-clothing-90609.firebaseapp.com",
  projectId: "crwn-clothing-90609",
  storageBucket: "crwn-clothing-90609.appspot.com",
  messagingSenderId: "672373425739",
  appId: "1:672373425739:web:4c4f613e42ed358095afce",
  measurementId: "G-PLL80KP36M",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log(err);
    }
  }
  return userRef;

  //console.log(firestore.doc("users/addfefkmlk2l3k"));
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
