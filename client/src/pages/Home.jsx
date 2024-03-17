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
    const { authUser, isNewLogin, isAlreadyLogin, isNewUser } = useContext(AuthContext)
    const [message, setMessage] = useState("empty")

    useEffect(() => {
        if (isNewUser) {
            setMessage("You have successfully signed up!")
        } else if (isNewLogin) {
            setMessage("You have successfully logged in!")
        } else if (isAlreadyLogin) {
            setMessage(`Welcome, ${authUser.username}`)
        }
    }, [authUser, isNewLogin, isAlreadyLogin, isNewUser])

    return (
        <div>
            <NavigationBar />
            {authUser.isAuthenticated && <Alert variant="success" className=" mx-1"> {message}</Alert >}
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