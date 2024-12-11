import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../Firebase/firebase.config';


export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const info = {
      user,
      createUser,
      loading,
      login,
    };
    return (
        <AuthContext.Provider value={info}>
            {children}  
        </AuthContext.Provider>
    );
};

export default AuthProvider;