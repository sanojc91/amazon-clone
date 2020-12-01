import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrA9vjTWO0Xpfg0fUkTwgznG12EA1D_tw",
  authDomain: "clone-7b120.firebaseapp.com",
  databaseURL: "https://clone-7b120.firebaseio.com",
  projectId: "clone-7b120",
  storageBucket: "clone-7b120.appspot.com",
  messagingSenderId: "460083661098",
  appId: "1:460083661098:web:b89f651e5c45c852893653",
  measurementId: "G-RNLV98L86D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
