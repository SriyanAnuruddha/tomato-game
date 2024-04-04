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
        logout(); // reset login context

        // clear the token from cookies after logging out
        (async () => {
            try {
                const response = await fetch('/api/users/logout')
                const message = await response.json();
            } catch (e) {
                console.log("can't logout")
            }
        })()
    }

    return (
        <Navbar className='shadow p-3 bg-primary' data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to='/' >TomatoQuest</Navbar.Brand>
                <Nav >
                    {authUser.isAuthenticated && <NavDropdown title={authUser.username} id="navbarScrollingDropdown" >
                        <NavDropdown.Item className='text-danger' onClick={handleLogout}>
                            Logout
                        </NavDropdown.Item>
                    </NavDropdown>}
                </Nav>
            </Container>
        </Navbar>
    )
}