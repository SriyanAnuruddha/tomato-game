import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function SingUp() {
    const [signUpData, setSignUpData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [isPasswordNotEqual, setIsPasswordNotEqual] = useState(false)


    function handleSubmit(event) {
        event.preventDefault();

        // check password and confirm password is equal
        if (signUpData.password !== signUpData.confirmPassword) {
            setIsPasswordNotEqual(true)
        } else {
            console.log(signUpData)
            setIsPasswordNotEqual(false)
        }
    }

    function onClickHandler(event) {
        const { name, value } = event.target
        setSignUpData(prevSignUpData => {
            return {
                ...prevSignUpData,
                [name]: value
            }
        })
    }

    return (
        <Form onSubmit={handleSubmit} className='p-2'>
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control onChange={onClickHandler} name='username' value={signUpData.username} type="text" placeholder="Enter Username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Addres</Form.Label>
                <Form.Control onChange={onClickHandler} name='email' value={signUpData.email} type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={onClickHandler} name='password' value={signUpData.password} type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control onChange={onClickHandler} name='confirmPassword' value={signUpData.confirmPassword} type="password" placeholder="Password" />
                {isPasswordNotEqual && <p> password don't match!</p>}
            </Form.Group>

            <Button variant="primary" type="submit" className='w-100'>
                Sign Up
            </Button>
        </Form>
    )
}