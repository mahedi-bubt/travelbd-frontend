import initializationApp from "../Firebase/firebase.init";
import { } from 'firebase/app';
import {
    getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut
} from "firebase/auth";
import { useEffect, useState } from "react";

initializationApp();

const useFirebase = () => {
    const [user, setUser] = useState();
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)

    }
    //observe user auth state changed or not
    useEffect(() => {
        const unsuscriber = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
        return unsuscriber;
    }, [])

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        })
    }
    return {
        user,
        googleSignIn,
        logOut
    }
}
export default useFirebase;