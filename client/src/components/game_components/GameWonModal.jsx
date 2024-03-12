import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';

export default function GameWonModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <Modal.Body className='text-center'>
                <h1 className='p-4'>You Win!</h1>
                <div className='px-5'>
                    <ListGroup as="ol" >
                        <ListGroup.Item as="li" className='bg-warning'>Finished Time {Math.floor(props.gameInfo.finishTime / 60)}:{props.gameInfo.finishTime % 60}</ListGroup.Item>
                        <ListGroup.Item as="li" className='bg-warning'>Current Score :{props.gameInfo.score}</ListGroup.Item>

                    </ListGroup>
                </div>
            </Modal.Body>
            <Modal.Footer className='d-flex justify-content-center'>
                <Button onClick={props.newLevel}>Next Level  <i className="bi bi-fast-forward-circle p-1"></i></Button>
                <Button className='btn-danger' onClick={props.onHide}><Link className='remove_link_default' to='/'>Quit Game</Link><i className="bi bi-escape p-1"></i></Button>
            </Modal.Footer>
        </Modal>
    );
}