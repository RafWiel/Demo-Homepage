import '../assets/navbar.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'wouter';
import logo from '/demo-logo.svg';


const NavBar = () => {
    return (        
        <Navbar expand="sm" className="navbar">
            <Container fluid>
                <Link href="/">
                    <Navbar.Brand>
                        <img src={logo} className="navbar-logo" alt="logo" />
                    </Navbar.Brand>
                </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-center flex-grow-1 navbar-buttons">                   
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
                        <Button
                            variant="primary"                            
                            className="px-4 me-3">
                            NAPISZ DO NAS
                        </Button>
                    </Navbar.Collapse>                                                    
            </Container>
        </Navbar>        
    );
}

export default NavBar;
