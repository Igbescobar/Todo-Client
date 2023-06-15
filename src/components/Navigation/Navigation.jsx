import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {

    return (
        <Navbar bg="light" expand="lg" className='mb-5'>
            <Container>
                <Navbar.Brand as='span'>
                    <Link to='/'>TodoApp</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as='span'>
                            <Link to='/profile'>Profile</Link>
                        </Nav.Link>
                        <NavDropdown title="Auth" id="basic-nav-dropdown">
                            <NavDropdown.Item as='span'>
                                <Link to='/register'>Register</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item as='span'>
                                <Link to='/login'>Login</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation