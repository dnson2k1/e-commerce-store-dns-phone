import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPDTWybYwlofDdzbuiQaN8Mo_3GdXQmL0",
  authDomain: "fashion-store-3e67d.firebaseapp.com",
  projectId: "fashion-store-3e67d",
  storageBucket: "fashion-store-3e67d.appspot.com",
  messagingSenderId: "866212751746",
  appId: "1:866212751746:web:a278e332aec3d13a20079b",
  measurementId: "G-7ECD58C6LW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
