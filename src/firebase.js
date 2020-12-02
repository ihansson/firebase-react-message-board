import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBPivUDo5xc1rLZlZ5GIGFBUooibjnCpzY",
    authDomain: "fem-firebase-a9490.firebaseapp.com",
    databaseURL: "https://fem-firebase-a9490.firebaseio.com",
    projectId: "fem-firebase-a9490",
    storageBucket: "fem-firebase-a9490.appspot.com",
    messagingSenderId: "357321805083",
    appId: "1:357321805083:web:4c4eeafb27e5003df357be"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider()
export const signInWithPopup = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut()

firestore.settings({ timestampsInSnapshots: true })

window.firebase = firebase

export default firebase