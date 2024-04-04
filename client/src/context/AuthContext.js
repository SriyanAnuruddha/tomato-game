import React from 'react'

const AuthContext = React.createContext({
    user: null,
    authType:null,
    login: () => { },
    logout: () => { },
    changeAuthType: () => { }
});

export default AuthContext;