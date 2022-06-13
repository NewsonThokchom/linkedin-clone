// // v9 compat packages are API compatible with v8 code
import { initializeApp } from 'firebase/app'
import { getAuth } from '@firebase/auth'
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: "linkedin-clone-7e2f6",
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_ID
});

export const auth = getAuth(firebaseConfig)
export const db = getFirestore(firebaseConfig)


// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyBu8p1FrM8leR2oxX85ToOlDZwYHULnv_E",
//     authDomain: "linkedin-clone-7e2f6.firebaseapp.com",
//     projectId: "linkedin-clone-7e2f6",
//     storageBucket: "linkedin-clone-7e2f6.appspot.com",
//     messagingSenderId: "1007297568483",
//     appId: "1:1007297568483:web:0ea39de2195112906fafd6"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore()
// const auth = firebase.auth()

// export { db, auth }