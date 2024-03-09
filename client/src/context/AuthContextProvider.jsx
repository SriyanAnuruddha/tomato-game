import { useState } from "react";
import AuthContext from "./AuthContext";

export default function AuthContextProvider({ childrens }) {
    const unAuthorizedUser = {
        username: '',
        email: '',
        isAuthenticated: false
    }


    const [authUser, setAuthUser] = useState(unAuthorizedUser)

    const login = (user) => {
        setAuthUser(user)
    }

    const logout = () => {
        setAuthUser(unAuthorizedUser)
    }

    return (
        <AuthContext.Provider values={{ authUser, login, logout }}>
            {childrens}
        </AuthContext.Provider>
    )
}