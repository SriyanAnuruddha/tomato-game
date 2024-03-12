import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function GameOverModal(props) {
    const navigate = useNavigate();

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <Modal.Body className='text-center'>
                <h1 className='p-4'>Game Over!</h1>

            </Modal.Body>
            <Modal.Footer className='d-flex justify-content-center'>
                <Button className='btn-success' onClick={() => navigate(0)}>Play Again!<i className="bi bi-arrow-repeat"></i></Button>
                <Button className='btn-danger' onClick={props.onHide}><Link className='remove_link_default' to='/'>Quit Game</Link><i className="bi bi-escape p-1"></i></Button>
            </Modal.Footer>
        </Modal>
    );
}