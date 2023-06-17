import { useContext } from 'react'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'

const Navigation = () => {

    const { user, logout } = useContext(AuthContext)

    return (
        <Navbar bg="light" expand="lg" className='mb-5'>
            <Container>
                <Navbar.Brand as='span'>
                    <Link to='/'>TodoApp</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {
                    user
                        ?
                        (
                            <>
                                <Nav.Link as='span'>
                                    <Link to=''>Hola {user.username}</Link>
                                </Nav.Link>
                                <Nav.Link as='span' onClick={logout}>
                                    <Link to=''>Logout</Link>
                                </Nav.Link>
                            </>

                        ) : (

                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
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
                        )
                }

            </Container>
        </Navbar>
    )
}

export default Navigation