import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom"
import AuthContext from '../context/AuthContext'
import { useContext } from 'react';

export default function NavigationBar() {
    const { authUser, logout } = useContext(AuthContext)

    function handleLogout(event) {
        logout(); // reset login state in front end

        //logout from backend (clear the Token stored in )
        (async () => {
            try {
                const response = await fetch('/api/users/logout')
                const message = await response.json();
                console.log(message)
            } catch (e) {
                console.log("can't logout")
            }
        })()
    }

    return (
        <Navbar bg="primary" data-bs-theme="light">
            <Container>
                <Navbar.Brand as={Link} to='/'>TomatoQuest</Navbar.Brand>
                <Nav >
                    {authUser.isAuthenticated && <NavDropdown title={authUser.username} id="navbarScrollingDropdown" >
                        <NavDropdown.Item as={Link} to='/profile'>
                            View Profile
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={handleLogout}>
                            Logout
                        </NavDropdown.Item>
                    </NavDropdown>}
                </Nav>
            </Container>
        </Navbar>
    )
}