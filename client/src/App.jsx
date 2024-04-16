import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import GamePage from './pages/GamePage';
import AuthContext from './context/AuthContext'
import PrivateRoute from './components/PrivateRoute';
import image from './assets/images/backgroundImage.jpg'


export default function App() {

    // add image to the App component
    const styles = {
        backgroundSize: "cover",
        height: "100vh",
        backgroundImage: `url(${image})`
    }

    // create different front end routes
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            element: <PrivateRoute />, // Nest private routes under this element
            children: [
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