import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";

export default function AuthProvider({ children }) {
    const [authUser, setAuthUser] = useState({})
    const [authType, setAuthType] = useState(0) // 0 = logout(not authenticated), 1 =  already login, 2 = new login , 3 = sign up


    const unAuthorizedUser = {
        username: '',
        email: '',
        isAuthenticated: false
    }

    // check if user already have the token
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('/api/users/authenticate')
                const user = await response.json();
                
                if(user.isAuthenticated){
                    setAuthUser(user)
                    setAuthType(1)
                }else{
                    setAuthUser(unAuthorizedUser)
                }
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

    const changeAuthType = (type) => {
        setAuthType(type)
    }

    return (
        <AuthContext.Provider value={{ authUser, login, logout, authType, changeAuthType }}>
            {children}
        </AuthContext.Provider>
    )
}

