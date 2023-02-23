import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, 
signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

export default function AuthProvider({ children }) {
    // hooks
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [availableSeats, setAvailableSeats] = useState(null);

    // functions
    // create user with email and password
    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    // sign in with email and password
    const signIn = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass);
    }

    // sign in with provider eg; google, github, facebook..
    const providerSignIn = (provider) => {
        return signInWithPopup(auth, provider);
    }

    // update profile
    const setProfileInfo = (name, photoUrl) => {
        setLoading(false);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
        }).then(res => {
            setLoading(true);
        })
            .catch(err => {
                setLoading(true);
            })
    }

    // sign out
    const logOut = () => {
        return signOut(auth);
    }


    // onAuthStateChanged
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser || currentUser === null) {
                console.log(currentUser)
                setUser(currentUser);
                setLoading(true);
            }
        })
        return () => unsubscribe();
    }, [])

    const authInfo = { user, providerSignIn, loading, logOut, createUser, signIn, setProfileInfo , selectedDate, setSelectedDate,availableSeats, setAvailableSeats}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
