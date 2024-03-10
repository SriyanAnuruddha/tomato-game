import React from 'react'

const AuthContext = React.createContext({
    user: null,
    login: () => { },
    logout: () => { },
    isNewUser: null,
    isNewLogin: null,
    isAlreadyLogin: null,
    newLogin: () => { },
    alreadyLogin: () => { },
    newUser: () => { }
});

export default AuthContext;