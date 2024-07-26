import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtzttpj9lje2_9r8BU0adsEc5a5LNhcfM",
  authDomain: "leaselytics-7a047.firebaseapp.com",
  projectId: "leaselytics-7a047",
  storageBucket: "leaselytics-7a047.appspot.com",
  messagingSenderId: "748673366088",
  appId: "1:748673366088:web:0f342b1e41cd7bf98c807d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export { app, auth };
