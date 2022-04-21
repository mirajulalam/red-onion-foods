// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARiBTQq5224Jm9Ch91h4Gw913U9r8EDLY",
    authDomain: "red-onion-foods-47c71.firebaseapp.com",
    projectId: "red-onion-foods-47c71",
    storageBucket: "red-onion-foods-47c71.appspot.com",
    messagingSenderId: "561135111007",
    appId: "1:561135111007:web:1d32b14ef6986f31f044ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;