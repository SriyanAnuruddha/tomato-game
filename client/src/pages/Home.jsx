import NavigationBar from "../components/NavigationBar"
import LeaderBoard from "../components/LeaderBoard"
import TabPanel from "../components/TabPanel"
import PlayGameButton from "../components/PlayGameButton"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
    return (
        <div>
            <NavigationBar />
            <div className="p-3 container">
                <div className="row">
                    <div className="col-sm">
                        <LeaderBoard />
                    </div>
                    <div className="col-sm">
                        <PlayGameButton />
                    </div>
                    <div className="col-sm">
                        <TabPanel />
                    </div>
                </div>
            </div>
        </div>
    )
}