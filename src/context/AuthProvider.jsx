import { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const login = async (email, pass) => {
    setLoading(true);
    return await signInWithEmailAndPassword(auth, email, pass);
  };

  const loginWithGoogle = async () => {
    try {
      setLoading(true);

      return await signInWithPopup(auth, googleProvider);
    } catch (err) {
      setError(err.message);
    }
  };

  const loginWithGitHub = async () => {
    try {
      setLoading(true);
      console.log(user);
      return await signInWithPopup(auth, gitHubProvider);
    } catch (err) {
      setError(err.message);
    }
  };

  const logout = async () => {
    setLoading(true);
    return await signOut(auth);
  };

  const createUser = async (email, pass) => {
    setLoading(true);
    return await createUserWithEmailAndPassword(auth, email, pass);
  };

  const updateUserProfile = async (name, photo) => {
    setLoading(true);
    return await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    setLoading,
    login,
    logout,
    createUser,
    updateUserProfile,
    setError,
    error,
    loginWithGoogle,
    loginWithGitHub,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;