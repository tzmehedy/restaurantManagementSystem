import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import auth from '../Firebase/firebase.config';
import useAxiosPublic from '../Hooks/useAxiosPublic';



export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()


    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const Logout = ()=>{
      return signOut(auth)
    }

    const updateUser = (name,photo)=>{
      return updateProfile(auth.currentUser,{
        displayName: name,
        photoURL: photo
      })

    }

    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (user) => {
        
        setUser(user)
       
        if(user){
          const userInfo = { email: user.email };
          axiosPublic.post("/jwt", userInfo)
          .then(data=>{
            if(data.data.token){
              localStorage.setItem("Access-Token", data.data.token);
            }
          })
        }
        else{
          localStorage.removeItem("Access-Token")
        }
        setLoading(false);
      });
      return () => {
        unSubscribe();
      };
    }, []);
    const info = {
      user,
      createUser,
      loading,
      login,
      Logout,
      updateUser,
    };
    return (
        <AuthContext.Provider value={info}>
            {children}  
        </AuthContext.Provider>
    );
};

export default AuthProvider;