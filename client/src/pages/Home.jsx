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
    const [showAlert, setShowAlert] = useState(true);

    const { authUser } = useContext(AuthContext)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAlert(false);
        }, 5000); // close Alert after 5 seconds 

        return () => clearTimeout(timer);
    }, []);


    return (
        <div>
            <NavigationBar />
            {showAlert && authUser.isAuthenticated && <Alert variant="success" >Welcome, {authUser.username}! </Alert >}
            <div className="p-5 container">
                <div className="row">
                    <div className="col-sm">
                        <LeaderBoard />
                    </div>
                    <div className="col-sm d-flex justify-content-center">
                        <PlayGameButton />
                    </div>
                    {
                        !authUser.isAuthenticated &&
                        <div className="col-sm">
                            <TabPanel />
                        </div>
                    }
                </div>
            </div>
        </div >
    )
}