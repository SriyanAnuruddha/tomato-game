import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login() {
    return (
        <Form className='p-2'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" className='w-100'>
                Login
            </Button>
        </Form>
    )
}