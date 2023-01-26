// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseOptions, getApp } from "firebase/app";


import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-jy-hX3LVXM2SIOOChahucBw1b79qaEs",
    authDomain: "creative-minds-7ebba.firebaseapp.com",
    projectId: "creative-minds-7ebba",
    storageBucket: "creative-minds-7ebba.appspot.com",
    messagingSenderId: "424641201537",
    appId: "1:424641201537:web:2711fa8467dd435e769480"
};


function createFirebaseApp() {
    try {
        return getApp()
    } catch {
        return initializeApp(firebaseConfig);
    }
}

const app = createFirebaseApp()


export const auth = getAuth()
export const db = getFirestore(app)