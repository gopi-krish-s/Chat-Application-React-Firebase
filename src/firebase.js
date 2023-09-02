import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyC1jHu8n3htKFH9FDdMhC4LU1sa3JcNvcQ",
  authDomain: "chats-379d4.firebaseapp.com",
  projectId: "chats-379d4",
  storageBucket: "chats-379d4.appspot.com",
  messagingSenderId: "54623577216",
  appId: "1:54623577216:web:77e2e0afb5e5cebd8f3265",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();;
