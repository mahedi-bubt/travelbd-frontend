import initializationApp from "../Firebase/firebase.init";
import { } from 'firebase/app';
import {
    getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut,
    createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile
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
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserDetails = (username) => {
        return updateProfile(auth.currentUser, {
            displayName: { username }
        })
    }

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        })
    }
    return {
        user,
        googleSignIn,
        createUser,
        logInUser,
        updateUserDetails,
        logOut
    }
}
export default useFirebase;