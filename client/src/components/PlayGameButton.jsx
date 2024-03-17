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

    useEffect(() => {
        if (authUser.isAuthenticated) {
            setShowAlert(false)
        }
    }, [authUser.isAuthenticated])


    function showError(event) {
        if (!authUser.isAuthenticated) {
            event.preventDefault()
            setShowAlert(true)
        }
    }

    return (
        <div className="  d-flex flex-column">
            {showAlert && !authUser.isAuthenticated && <Alert variant="warning">Please log in to play the game!</Alert >}
            <Link onClick={showError} to='/game'><Card.Img variant="top" className="rounded shadow" src={playImage} /> </Link>
        </div >
    )
}