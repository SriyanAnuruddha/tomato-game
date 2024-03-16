import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AuthContext from '../context/AuthContext'
import Alert from 'react-bootstrap/Alert';

export default function SingUp() {
    const { login, newUser } = useContext(AuthContext)
    const [error, setError] = useState({ showError: false, message: "" })

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

                        if (user.isAuthenticated) { // check use successfully signup
                            login(user)// set user context state
                            newUser()
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
            setIsPasswordNotEqual(false) // reset passwrod not equal state
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
            {error.showError && <Alert variant="danger"> {error.message}</Alert>}
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control required onChange={onClickHandler} name='username' value={signUpData.username} type="text" placeholder="Enter Username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Addres</Form.Label>
                <Form.Control required onChange={onClickHandler} name='email' value={signUpData.email} type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required onChange={onClickHandler} name='password' value={signUpData.password} type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control required onChange={onClickHandler} name='confirmPassword' value={signUpData.confirmPassword} type="password" placeholder="Password" />
                {isPasswordNotEqual && <p className='text-danger'> passwords don't match!</p>}
            </Form.Group>

            <Button variant="primary" type="submit" className='w-100'>
                Sign Up
            </Button>
        </Form>
    )
}