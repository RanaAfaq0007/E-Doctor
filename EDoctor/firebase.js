// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOGBqSKzPjyBk5iifsLRohNgbRPmp2PiM",
  authDomain: "edoctorapp-b7da7.firebaseapp.com",
  projectId: "edoctorapp-b7da7",
  storageBucket: "edoctorapp-b7da7.appspot.com",
  messagingSenderId: "971804304578",
  appId: "1:971804304578:web:d0bfb590391607bcf2075b",
  measurementId: "G-5C5BEHHDRR"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}
const app = initializeApp(firebaseConfig);

export {app, firebase}
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);