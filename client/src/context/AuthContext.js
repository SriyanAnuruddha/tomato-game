import React from 'react'

// Create a context; these context variables are accessible within every component.
const AuthContext = React.createContext({
    user: null,
    authType: null,
    login: () => { },
    logout: () => { },
    changeAuthType: () => { }
});

export default AuthContext;