// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFwQcXicPt-k9SqDx3j3uGgn_KJ0u1xk4",
  authDomain: "cineflix-gpt-backend.firebaseapp.com",
  projectId: "cineflix-gpt-backend",
  storageBucket: "cineflix-gpt-backend.appspot.com",
  messagingSenderId: "312836230665",
  appId: "1:312836230665:web:fecc183db3d2e43b52b2d8",
  measurementId: "G-7MQYE50Q5Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
