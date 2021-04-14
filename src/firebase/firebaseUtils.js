import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCIPlMpMNcX7O96sQIxNIIkQ9fi-TCLr3Y',
  authDomain: 'claire-clothing-db.firebaseapp.com',
  projectId: 'claire-clothing-db',
  storageBucket: 'claire-clothing-db.appspot.com',
  messagingSenderId: '656722188556',
  appId: '1:656722188556:web:64077ae06b69fc3e3e9129',
  measurementId: 'G-KVPQVT27XV',
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapshot = await userRef.get(); // get snapshot data

  // if the user doesn't exist
  if (!userSnapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      // only queryref can create new data
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
