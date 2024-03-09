import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import UserProfile from './pages/UserProfile';
import GamePage from './pages/GamePage';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/profile',
        element: <UserProfile />
    },
    {
        path: '/game',
        element: <GamePage />
    }
])

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}