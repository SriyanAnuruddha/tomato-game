import { Link } from "react-router-dom";
import tomatoGame from "../assets/images/play_button.jpg"
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';
import { useContext, useEffect, useState } from "react";
import AuthContext from '../context/AuthContext'

export default function PlayGameButton() {
    const [showAlert, setShowAlert] = useState(false)
    const { authUser } = useContext(AuthContext)

    useEffect(() => {
        if (authUser.isAuthenticated) {
            setShowAlert(false)
        }
    }, [authUser.isAuthenticated])



    return (
        <div className="d-flex flex-column">
            {showAlert && !authUser.isAuthenticated && <Alert variant="warning">Please log in to play the game!</Alert >}
            <Link to='/game'> <Image onClick={() => !authUser.isAuthenticated && setShowAlert(true)} className="rounded  d-block " src={tomatoGame} rounded /></Link>
        </div>
    )
}