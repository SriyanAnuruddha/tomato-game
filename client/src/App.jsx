import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import UserProfile from './pages/UserProfile';
import GamePage from './pages/GamePage';
import AuthContext from './context/AuthContext'
import { createContext, useContext } from 'react';


export default function App() {
    const { authUser } = useContext(AuthContext)

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/profile',
            element: authUser.isAuthenticated ? <UserProfile /> : <Home />
        },
        {
            path: '/game',
            element: authUser.isAuthenticated ? <GamePage /> : <Home />
        }
    ])

    return (
        <RouterProvider router={router} />
    )
}