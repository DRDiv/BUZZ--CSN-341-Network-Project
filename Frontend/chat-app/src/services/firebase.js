// services/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/firebase-auth";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTTQppX-Ym-45sdVNIfhesibPB-Ss-g2U",
  authDomain: "chat-app-c3cf2.firebaseapp.com",
  projectId: "chat-app-c3cf2",
  storageBucket: "chat-app-c3cf2.appspot.com",
  messagingSenderId: "745943073343",
  appId: "1:745943073343:web:9a765dc4b7a175e762ae8a",
  measurementId: "G-SS6V80WSX3"
};

// Initialize Firebase app and services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, analytics };
