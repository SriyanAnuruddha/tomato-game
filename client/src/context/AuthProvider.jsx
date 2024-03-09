import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";

export default function AuthProvider({ children }) {
    const [authUser, setAuthUser] = useState({})

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

    return (
        <AuthContext.Provider value={{ authUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

