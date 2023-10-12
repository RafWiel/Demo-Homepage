import '../style/navbar.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'wouter';
import logo from '/demo-logo.svg';


const NavBar = () => {
    return (
        <Navbar className="navbar" expand="sm" >
            <Container className="navbar-container">
                <Link href="/">
                    <Navbar.Brand>
                        <img src={logo} className="navbar-logo" alt="logo" />
                    </Navbar.Brand>
                </Link>
                <Container className="navbar-buttons-container">
                    <Button
                        variant="primary"
                        className="px-5">
                        test
                    </Button>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navbar-buttons">                   
                            <NavDropdown title="FIRMA">
                                <Link href="/about">
                                    <NavDropdown.Item>O NAS</NavDropdown.Item>
                                </Link>
                                <Link href="/jobs">
                                    <NavDropdown.Item>PRACA</NavDropdown.Item>
                                </Link>
                                <Link href="/contact">
                                    <NavDropdown.Item>KONTAKT</NavDropdown.Item>
                                </Link>                        
                            </NavDropdown>                    
                            <NavDropdown title="OFERTA">
                                <Link href="/services">
                                    <NavDropdown.Item>USŁUGI</NavDropdown.Item>
                                </Link>
                                <Link href="/software">
                                    <NavDropdown.Item>OPROGRAMOWANIE</NavDropdown.Item>
                                </Link>                        
                                <Link href="/maintenance">  
                                    <NavDropdown.Item>SERWIS</NavDropdown.Item>
                                </Link>                        
                            </NavDropdown>
                            <Link href="/solutions">
                                <Nav.Link>ROZWIĄZANIA</Nav.Link>
                            </Link>
                            <Link href="/implementations">
                                <Nav.Link>REALIZACJE</Nav.Link>
                            </Link>                    
                        </Nav>
                    </Navbar.Collapse>
                    <Link href="/solutions">
                                <Nav.Link>ROZWIĄZANIA</Nav.Link>
                            </Link>
                    <Button
                        variant="primary"
                        className="px-5">
                        test
                    </Button>
                </Container>
                <Button
                    variant="primary"
                    className="px-5">
                    Napisz do nas
                </Button>
            </Container>
        </Navbar>
    );
}

export default NavBar;
