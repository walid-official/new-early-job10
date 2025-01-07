import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase/firebase.init';
import axios from 'axios';
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  const createSignInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser,updatedData)
    .then(() => {
      // Manually update the user state with the new information
      setUser({
        ...auth.currentUser,
        displayName: updatedData.displayName,
        photoURL: updatedData.photoURL,
      });
    })
    .catch((error) => {
      throw error;
    });
  }

  
  const userSignOut = () => {
    return signOut(auth);
  }


  const signInWithGoogle = () => {
    setLoading(true)
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
  }


  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("currently Logged user", currentUser);
      setUser(currentUser)

      if (currentUser?.email) {
        const user = {email: currentUser?.email}
        axios.post(`${import.meta.env.VITE_API_URL}/jwt`,user,{withCredentials: true})
        .then(res => {
          console.log("Login",res.data)
          setLoading(false)
        })
      }else{
        axios.post(`${import.meta.env.VITE_API_URL}/logout`,{},{withCredentials: true})
        .then(res => {
            console.log("Logout",res.data)
            setLoading(false)
          })
        setUser(null)
      }
      setLoading(false)
    });
    return () => {
      unSubscribe();
    };
  }, []);

    const eduService = {
        user,
        loading,
        regex ,
        createUser,
        updateUserProfile,
        createSignInUser,
        userSignOut,
        signInWithGoogle
    }

    return (
        <AuthContext.Provider value={eduService}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;