import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
