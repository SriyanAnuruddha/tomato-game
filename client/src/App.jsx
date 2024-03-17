import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import UserProfile from './pages/UserProfile';
import GamePage from './pages/GamePage';
import AuthContext from './context/AuthContext'
import PrivateRoute from './components/PrivateRoute';
import image from './assets/images/backgroundImage.jpg'




export default function App() {

    const styles = {

        backgroundSize: "cover",
        height: "100vh",
        backgroundImage: `url(${image})`
    }

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            element: <PrivateRoute />, // Nest private routes under this element
            children: [
                { path: 'profile', element: <UserProfile /> },
                { path: 'game', element: <GamePage /> }
            ]
        }
    ]);

    return (
        <div style={styles}>
            <RouterProvider router={router} />
        </div>

    )
}