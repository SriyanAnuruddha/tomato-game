import NavigationBar from "../components/NavigationBar"
import tomatoGame from "../assets/tomatoGame.png"
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
export default function GamePage() {
    return (
        <>
            <NavigationBar />
            <div className="container p-5">
                <div className="row">
                    <div className="col border">
                        Level 1
                    </div>
                    <div className="col border">
                        Score: 100
                    </div>
                    <div className="col-5 border">

                    </div>
                    <div className="col border">
                        Time : 3.30
                    </div>
                </div>

                <div className="row border">
                    <div className="col  d-flex justify-content-center">
                        <Image className="rounded  d-block" src={tomatoGame} rounded />
                    </div>
                </div>

                <div className="row border ">
                    <div className="col d-flex justify-content-center">
                        <label htmlFor="">Enter your answer</label>
                        <input type="text" />
                        <button>submit</button>
                    </div>

                </div>
            </div >
        </>
    )
}