import NavigationBar from "../components/NavigationBar"
import LeaderBoard from "../components/LeaderBoard"
import TabPanel from "../components/TabPanel"
import PlayGameButton from "../components/PlayGameButton"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";

export default function Home() {
    const { authUser, authType, changeAuthType } = useContext(AuthContext)
    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState("")

    // Show the message acording the authentication type
    useEffect(() => {
        if (authType == 3) {
            setShowMessage(true)
            setMessage("You have successfully signed up!")
        } else if (authType == 2) {
            setShowMessage(true)
            setMessage("You have successfully logged in!")
        } else if (authType == 1) {
            setShowMessage(true)
            setMessage(`Welcome, ${authUser.username}`)
        }
    }, [authUser, authType])

    // hide the message after 3 seconds
    useEffect(() => {
        setTimeout(() => {
            changeAuthType(0)
            setShowMessage(false)
        }, 3500)
    }, [authType])

    return (
        <div>
            <NavigationBar />
            {showMessage && <Alert variant="success" className=" mx-1"> {message}</Alert >}
            <div className="p-5 container">
                <div className="row">
                    <div className="col-md">
                        <LeaderBoard />
                    </div>
                    <div className="col-md d-flex justify-content-center">
                        <PlayGameButton />
                    </div>
                    {
                        !authUser.isAuthenticated &&
                        <div className="col-md">
                            <TabPanel />
                        </div>
                    }
                </div>
            </div>
        </div >
    )
}