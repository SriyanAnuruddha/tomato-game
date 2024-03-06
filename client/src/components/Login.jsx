import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login() {
    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    })

    function handleSubmit(event) {
        event.preventDefault();

        // write data submit code here
    }

    function onClickHandler(event) {
        const { name, value } = event.target
        setLoginData(prevLoginData => {
            return {
                ...prevLoginData,
                [name]: value
            }
        })
    }


    return (
        <Form className='p-2' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="LoginformBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control onChange={onClickHandler} name='username' value={loginData.username} type="text" placeholder="Enter Username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="LoginformBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={onClickHandler} name='password' value={loginData.password} type="password" placeholder="Password" />
            </Form.Group>

            <Button type="submit" variant="primary" className='w-100'>
                Login
            </Button>
        </Form>
    )
}