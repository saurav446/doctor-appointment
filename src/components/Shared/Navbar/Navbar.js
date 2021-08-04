import React from 'react';
import { Navbar,Container,Nav ,NavDropdown} from 'react-bootstrap';

const navbar = () => {
    return (
        <div > 
       <Navbar   expand="lg">
        <Container>
            <Navbar.Brand href="#home">Doctor Protal</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
            <Nav >
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Dashboard</Nav.Link> 
                <Nav.Link href="#link">Admin</Nav.Link> 
                <Nav.Link href="#link">About</Nav.Link> 
                <Nav.Link href="#link">Contact</Nav.Link> 
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
      </div>
    );
};

export default navbar;




