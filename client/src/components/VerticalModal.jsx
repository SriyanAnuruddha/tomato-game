import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function VerticalModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>

            </Modal.Header>
            <Modal.Body className='p-5 text-center'>
                <i class="bi bi-check-circle h1 text-success "></i>
                <h2>{props.message}</h2>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}