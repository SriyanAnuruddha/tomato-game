import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom"

export default function NavigationBar() {
    return (
        <Navbar bg="primary" data-bs-theme="light">
            <Container>
                <Navbar.Brand as={Link} to='/'>TomatoQuest</Navbar.Brand>
                <Nav >
                    <NavDropdown title="Username" id="navbarScrollingDropdown" >
                        <NavDropdown.Item as={Link} to='/profile'>
                            View Profile
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Logout
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}