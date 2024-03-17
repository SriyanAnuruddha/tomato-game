import { Outlet, Navigate } from "react-router-dom"
import { useContext } from "react"
import AuthContext from "../context/AuthContext"

export default function PrivateRoute({ children }) {
    const { authUser } = useContext(AuthContext)

    return (
        authUser.isAuthenticated ? <Outlet /> : <Navigate to='/' replace /> //redirect to home page if user is not authenticated

    )
}