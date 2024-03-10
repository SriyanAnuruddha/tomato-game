import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";

export default function AuthProvider({ children }) {
    const [authUser, setAuthUser] = useState({})
    const [isNewUser, setIsNewUser] = useState(false)
    const [isNewLogin, setIsNewLogin] = useState(false)
    const [isAlreadyLogin, setIsAlreadyLogin] = useState(false)

    const unAuthorizedUser = {
        username: '',
        email: '',
        isAuthenticated: false
    }

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('/api/users/authenticate')
                const user = await response.json();
                setIsAlreadyLogin(true)
                setAuthUser(user)
            } catch (e) {
                setAuthUser(unAuthorizedUser)
                console.log('user is not registerd')
            }
        })();
    }, [])




    const login = (user) => {
        setAuthUser(user)
    }

    const logout = () => {
        setAuthUser(unAuthorizedUser)
    }

    const newLogin = () => {
        setIsNewLogin(true)
    }

    const alreadyLogin = () => {
        setIsAlreadyLogin(true)
    }

    const newUser = () => {
        setIsNewUser(true)
    }

    return (
        <AuthContext.Provider value={{ authUser, login, logout, isAlreadyLogin, alreadyLogin, isNewUser, newUser, isNewLogin, newLogin }}>
            {children}
        </AuthContext.Provider>
    )
}

