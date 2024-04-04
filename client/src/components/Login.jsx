import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AuthContext from '../context/AuthContext';
import Alert from 'react-bootstrap/Alert';

export default function Login() {
    const {login, changeAuthType } = useContext(AuthContext)
    const [error, setError] = useState({ showError: false, message: "" })

    // stores username and password
    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    })

    function handleSubmit(event) {
        event.preventDefault(); // prevent page from refreshing after clicking submit button(login Button)


        if (loginData.username && loginData.password) { // Checks if the user has entered a username and password
            (async function () {
                try {
                    const response = await fetch('/api/users/login',
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(loginData)
                        }
                    )

                    const user = await response.json();
                    if (user.isAuthenticated) {
                        login(user)// set user context state
                        changeAuthType(2)
                        setLoginData(prevData => { return { ...prevData, username: "", password: "" } }) // reset the form values
                    } else {
                        setError(prev => {
                            return { ...prev, showError: true, message: user.error }
                        })
                    }
                } catch (e) {
                    console.log(e)
                }
            })();
        }

    }

    // Get the form data and update the state
    function onClickHandler(event) {
        const { name, value } = event.target
        setLoginData(prevLoginData => {
            return {
                ...prevLoginData,
                [name]: value
            }
        })

        setError({ showError: false, message: "" })
    }


    return (
        <Form className='p-2' onSubmit={handleSubmit}>
            {error.showError && <Alert variant="danger"> {error.message}</Alert>}
            <Form.Group className="mb-3" controlId="LoginformBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control required onChange={onClickHandler} name='username' value={loginData.username} type="text" placeholder="Enter Username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="LoginformBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required onChange={onClickHandler} name='password' value={loginData.password} type="password" placeholder="Password" />
            </Form.Group>

            <Button type="submit" variant="primary" className='w-100'>
                Login
            </Button>

        </Form>
    )
}