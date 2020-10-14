import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDNxcsbsIf-G-KzFt1ZR95Sn-MycCvFNDI",
  authDomain: "clone-f392d.firebaseapp.com",
  databaseURL: "https://clone-f392d.firebaseio.com",
  projectId: "clone-f392d",
  storageBucket: "clone-f392d.appspot.com",
  messagingSenderId: "809430761596",
  appId: "1:809430761596:web:a650324a6a8a2bf64209f9",
  measurementId: "G-QDNTZK890Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };