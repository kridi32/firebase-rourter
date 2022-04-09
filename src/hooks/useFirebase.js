import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase.init";

const useFirebase = () => {
    const [user, setUser] = useState({}); 
    const provider = new GoogleAuthProvider();

    useEffect( () => {
        // observer of user state change(this will allow to re-render all the components using user state to the latest user state)
        onAuthStateChanged(auth, user =>{
            setUser(user);
        }) 
    },[])

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => { 
            setUser(result.user)
            console.log('Yahoo! you can sign in with google!');

        })
        .catch((error) => {
           console.error(error)
        })
        
    }
    const logOut = () => {
        signOut(auth)
        .then(() => {
            console.log("User has been sign Out");
        })
        .catch((error) => {
            console.log(error.message);
        })
      
    }
    // we will have to use object destructuring to get the exact variable of function
    return {
        user,
        setUser,
        signInWithGoogle,
        logOut
    };
}
export default useFirebase;