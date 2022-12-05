import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyChzbAAU5J7w0vNDtP0VKRVNmcVgAmuJRw",
  authDomain: "parthiv-portflio.firebaseapp.com",
  projectId: "parthiv-portflio",
  storageBucket: "parthiv-portflio.appspot.com",
  messagingSenderId: "341885250587",
  appId: "1:341885250587:web:f83666b4da276a717bdcbe"
};



export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
