import firebase from 'firebase/compat';
const firebaseConfig = {
    apiKey: "AIzaSyBDk1kMs0lj-XUfXA5qx-OelLP7bSY4eZ0",
    authDomain: "commerce-clone-eeaae.firebaseapp.com",
    projectId: "commerce-clone-eeaae",
    storageBucket: "commerce-clone-eeaae.appspot.com",
    messagingSenderId: "1019642154464",
    appId: "1:1019642154464:web:5c8647e076c7c1e3b76f85"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
