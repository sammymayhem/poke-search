import './Header.css';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/poke-logo.png';


function Header() {
    return (
        <div className='header'>
            <Navbar collapseOnSelect expand="md" variant='dark'>
                <Container>
                    <Navbar.Brand href="#home"><Image src={logo} className='logo'></Image></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto nav-links">
                            <Nav.Link id='nav-link' as={Link} to='/pokemon'>Pokemon</Nav.Link>
                            <Nav.Link id='nav-link' as={Link} to='/moves'>Moves</Nav.Link>
                            <Nav.Link id='nav-link' as={Link} to='/items'>Items</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;