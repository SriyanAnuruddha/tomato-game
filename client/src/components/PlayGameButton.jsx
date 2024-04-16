import { Link } from "react-router-dom";
import playImage from "../assets/images/playimage.jpg"
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';
import { useContext, useEffect, useState } from "react";
import AuthContext from '../context/AuthContext'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function PlayGameButton() {
    const [showAlert, setShowAlert] = useState(false)
    const { authUser } = useContext(AuthContext)

    // Show an alert if the user is not authenticated (logged in)
    useEffect(() => {
        if (authUser.isAuthenticated) {
            setShowAlert(false)
        }
    }, [authUser.isAuthenticated])


    // Prevent the user from accessing the game page if they are not already logged in
    function onClickHandler(event) {
        if (!authUser.isAuthenticated) {
            event.preventDefault() // Prevent redirect
            setShowAlert(true)
        }
    }

    return (
        <div className="  d-flex flex-column">
            {showAlert && !authUser.isAuthenticated && <Alert variant="warning">Please log in to play the game!</Alert >}
            <Link onClick={onClickHandler} to='/game'><Card.Img variant="top" className="rounded shadow" src={playImage} /> </Link>
        </div >
    )
}