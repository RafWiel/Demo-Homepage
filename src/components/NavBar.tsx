import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'wouter';
import logo from '/demo-logo.svg';

const NavBar = () => {
    return (
        <Navbar className="navbar" expand="sm" >
            <Container fluid>
                <Link href="/">
                    <Navbar.Brand>
                        <img src={logo} className="navbar-logo" alt="logo" />
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link href="/">
                        <Nav.Link>Firma</Nav.Link>
                    </Link>
                    {/* <Link href="/certificates/flow">
                        <Nav.Link>Świadectwa Pracy</Nav.Link>
                    </Link>
                    <Link href="/certificates/flow/new">
                        <Nav.Link>Świadectwo Przepływy</Nav.Link>
                    </Link>
                    <Link href="/devices">
                        <Nav.Link>Sensory Termiczne</Nav.Link>
                    </Link>
                    <Link href="/devices/2">
                        <Nav.Link>Sensor Termiczny</Nav.Link>
                    </Link>
                    <Link href="/form">
                        <Nav.Link>Form</Nav.Link>
                    </Link>
                    <Link href="/formik">
                        <Nav.Link>Formik</Nav.Link>
                    </Link>
                    <Link href="/test">
                        <Nav.Link>Test</Nav.Link>
                    </Link> */}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
