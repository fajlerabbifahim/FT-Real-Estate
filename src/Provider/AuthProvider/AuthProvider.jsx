import React, { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import Loader from "../../Components/Loader/Loader";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  // create a user
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //update a user

  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  // login a user
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //sign out a user

  const logOut = () => {
    // setLoading(true);
    return signOut(auth);
  };

  // ********* sign in with google *********

  const signinWithGoogle = (googleProvider) => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //observer

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        // get token and store client
        const userInfo = { email: currentUser.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          console.log("token response", res.data);

          if (res.data.token) {
            localStorage.setItem("accessToken", res.data.token);
          }
        });
      } else {
        // TODO: remove the token if(token stored in the client side local storage )
        localStorage.removeItem("accessToken");
      }

      console.log("this the current user", currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    setLoading,
    registerUser,
    signinWithGoogle,
    login,
    logOut,
    setUser,
    updateUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {loading ? <Loader /> : children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
