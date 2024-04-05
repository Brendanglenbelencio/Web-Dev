import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import storeLogo from '../assets/Logo.png';
import styles from './NavBar.module.css'

function Navigation() {

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary" bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home"><img src={storeLogo} alt="Store"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item><Nav.Link href="#home">Home</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="#features">About</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="#menu">Menu</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="#contacts">Contacts</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="#sign-in">Sign-In</Nav.Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* this is the code for the right aligened elements of a Navbar
            <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
       */}

    </Navbar>

    </>

  );
}

export default Navigation;