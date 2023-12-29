import '../assets/navbar.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'wouter';
import logo from '/demo-logo.svg';
import { useLocation } from 'wouter';
import routes from '../routes.ts';

const NavBar = () => {
    const [location, ] = useLocation();

    return (               
        <Navbar expand="md" className="navbar" sticky="top">
            <Container fluid>
                <Link href="/">
                    <Navbar.Brand>
                        <img src={logo} className="navbar-logo" alt="logo" />
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav
                        activeKey={location} 
                        className="justify-content-center flex-grow-1">                   
                        <Link href={routes.home}>
                            <Nav.Link>{routes.getTextUpper(routes.home)}</Nav.Link>
                        </Link>                        
                        <NavDropdown title="FIRMA">
                            <Link href={routes.about}>
                                <NavDropdown.Item>{routes.getTextUpper(routes.about)}</NavDropdown.Item>
                            </Link>
                            <Link href={routes.jobs}>
                                <NavDropdown.Item>{routes.getTextUpper(routes.jobs)}</NavDropdown.Item>
                            </Link>
                            <Link href={routes.contact}>
                                <NavDropdown.Item>{routes.getTextUpper(routes.contact)}</NavDropdown.Item>
                            </Link>                        
                        </NavDropdown>                    
                        <NavDropdown title="OFERTA">
                            <Link href={routes.services}>
                                <NavDropdown.Item>{routes.getTextUpper(routes.services)}</NavDropdown.Item>
                            </Link>
                            <Link href={routes.software}>
                                <NavDropdown.Item>{routes.getTextUpper(routes.software)}</NavDropdown.Item>
                            </Link>
                            <Link href={routes.maintenance}>  
                                <NavDropdown.Item>{routes.getTextUpper(routes.maintenance)}</NavDropdown.Item>
                            </Link>                        
                        </NavDropdown>
                        <Link href={routes.solutions}>
                            <Nav.Link>{routes.getTextUpper(routes.solutions)}</Nav.Link>
                        </Link>
                        <Link href={routes.implementations}>
                            <Nav.Link>{routes.getTextUpper(routes.implementations)}</Nav.Link>
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
