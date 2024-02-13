// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwyWMPj-WnK9rXjTWYm7tm9rwdyuIFc0s",
  authDomain: "vidiwave-d387e.firebaseapp.com",
  projectId: "vidiwave-d387e",
  storageBucket: "vidiwave-d387e.appspot.com",
  messagingSenderId: "614906251450",
  appId: "1:614906251450:web:0c34e6a3b6b3e389adda83",
  measurementId: "G-R5JCDRXBL7"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

