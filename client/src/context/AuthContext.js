import React from 'react'


const AuthContext = React.createContext({
    user: {
        username: '',
        email: '',
        isAuthenticated: false
    },
    login: () => { },
    logout: () => { }
});

export default AuthContext;