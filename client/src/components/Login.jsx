import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AuthContext from '../context/AuthContext';

export default function Login() {
    const { authUser, login, newLogin } = useContext(AuthContext)
    const [showModal, setShowModal] = useState(false)

    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    })

    function handleSubmit(event) {
        event.preventDefault(); //prevent page from refreshing after clicking submit button(login Button)


        if (loginData.username && loginData.password) { // validate form data
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
                    login(user)// set user context state
                    newLogin() // set new user login
                } catch (e) {
                    return console.log(e)
                }
            })();
        }

        // clear from data
        setLoginData(
            {
                username: "",
                password: "",
            }
        )

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