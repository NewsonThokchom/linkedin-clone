// // v9 compat packages are API compatible with v8 code
import { initializeApp } from 'firebase/app'
import { getAuth } from '@firebase/auth'
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: "",
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_ID
});

export const auth = getAuth(firebaseConfig)
export const db = getFirestore(firebaseConfig)
