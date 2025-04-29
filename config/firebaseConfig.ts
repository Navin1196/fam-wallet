import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2gyLps_xGIarMWJSAW7OqvwZ-zuXwy6E",
  authDomain: "fir-ssologin.firebaseapp.com",
  projectId: "fir-ssologin",
  storageBucket: "fir-ssologin.firebasestorage.app",
  messagingSenderId: "885115174418",
  appId: "1:885115174418:web:bfcb4740496fae81f022cb",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
