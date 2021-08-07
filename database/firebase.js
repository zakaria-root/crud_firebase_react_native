import firebase from "firebase";
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBglNnVQ1VIoMkh-PoJ1Udu-1qf5-Jn2qM",
    authDomain: "crud-firebase-ae0a3.firebaseapp.com",
    projectId: "crud-firebase-ae0a3",
    storageBucket: "crud-firebase-ae0a3.appspot.com",
    messagingSenderId: "679739216365",
    appId: "1:679739216365:web:3df6832d6277558d5897e4"
}

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default {
    firebase,
    db,
}