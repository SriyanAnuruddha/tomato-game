import tomatoGame from "../assets/tomatoGame.png"
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export default function Game() {
    return (
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

            <div className="row border">
                <div className="col input-group  d-flex  justify-content-center">
                    <div className="w-25 m-2">
                        <input type="text" className="form-control" placeholder="enter your answer" aria-label="" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group-prepend ">
                        <button className="btn btn-primary m-2" type="button">Button</button>
                    </div>
                </div>
            </div>
        </div >
    )
}