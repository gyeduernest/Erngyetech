import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyDEcWgxKx-eAKfyIRINimuVMJwEQ255Qt8",
  authDomain: "erngyetech.firebaseapp.com",
  projectId: "erngyetech",
  storageBucket: "erngyetech.appspot.com",
  messagingSenderId: "1064344053451",
  appId: "1:1064344053451:web:612df6164e7774bc139d4e"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);