import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AuthContext from '../context/AuthContext'
import Alert from 'react-bootstrap/Alert';

export default function SingUp() {
    const { login, changeAuthType } = useContext(AuthContext)
    const [error, setError] = useState({ showError: false, message: "" })

    const [signUpData, setSignUpData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    // sends signup form data to the server
    function handleSubmit(event) {
        event.preventDefault(); // Prevents the page from reloading after clicking the submit button

        // check password and confirm password is equal
        if (signUpData.password !== signUpData.confirmPassword) {
            setError({ showError: true, message: "passwords don't match!" })
        } else {
            if (signUpData.username && signUpData.email) {
                (async function () {
                    try {
                        const response = await fetch('/api/users/register',
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(signUpData)
                            }
                        )

                        const user = await response.json();

                        if (user.isAuthenticated) { // check if the user has successfully signed up
                            login(user)// set user context state
                            changeAuthType(3)
                            setSignUpData({
                                username: "",
                                email: "",
                                password: "",
                                confirmPassword: ""
                            })
                        } else {
                            setError(prev => {
                                return { ...prev, showError: true, message: user.error }
                            })
                        }

                    } catch (e) {
                        return console.log(e)
                    }
                })();
            }
            setError({ showError: false, message: "" })
        }
    }

    // Retrieve the signup form data and update the signup state accordingly
    function onChangeHandler(event) {
        const { name, value } = event.target
        setSignUpData(prevSignUpData => {
            return {
                ...prevSignUpData,
                [name]: value
            }
        })

        setError({ showError: false, message: "" }) // stop showing the error when new values entered to the text field
    }

    return (
        <Form onSubmit={handleSubmit} className='p-2'>
            {error.showError && <Alert variant="danger"> {error.message}</Alert>}
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control required onChange={onChangeHandler} name='username' value={signUpData.username} type="text" placeholder="Enter Username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Addres</Form.Label>
                <Form.Control required onChange={onChangeHandler} name='email' value={signUpData.email} type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required onChange={onChangeHandler} name='password' value={signUpData.password} type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control required onChange={onChangeHandler} name='confirmPassword' value={signUpData.confirmPassword} type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" className='w-100'>
                Sign Up
            </Button>
        </Form>
    )
}