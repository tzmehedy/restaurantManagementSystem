import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import auth from '../Firebase/firebase.config';
import useAxiosPublic from '../Hooks/useAxiosPublic';



export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user,setUser] = useState([])
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()


    const createUser = (email,password) =>{
      setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email,password)=>{
       setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const Logout = ()=>{
       setLoading(true);
      return signOut(auth)
    }

    const updateUser = (name,photo)=>{
       setLoading(true);
      return updateProfile(auth.currentUser,{
        displayName: name,
        photoURL: photo
      })

    }
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (CurrentUser) => {
        
        setUser(CurrentUser);
        if (CurrentUser) {
          const userInfo = { email: CurrentUser.email };
          axiosPublic.post("/jwt", userInfo).then((data) => {
            if (data.data.token) {
              localStorage.setItem("Access-Token", data.data.token);
            }
          });
        } else {
          localStorage.removeItem("Access-Token");
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