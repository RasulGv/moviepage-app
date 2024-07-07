import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection,getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyD__YmZ7d4rqNVoKPmKwBY62jYfb1AQEsQ",
  authDomain: "netflix-8e292.firebaseapp.com",
  projectId: "netflix-8e292",
  storageBucket: "netflix-8e292.appspot.com",
  messagingSenderId: "432380034823",
  appId: "1:432380034823:web:ceaad6ac45dc0abd720fa2"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);
const signUp=async(name,email,password)=>{
    try {
        const res=await createUserWithEmailAndPassword(auth,email,password);
        const user=res.user;
        await addDoc(collection(db, "user"),{
            uid:user.uid,
            name,
            autProvider:"local",
            email,

        })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login=async(email,password)=>{
    try {

        await signInWithEmailAndPassword(auth,email,password);

     } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logOut=()=>{
    signOut(auth);
}

export{auth, db, login, signUp, logOut};