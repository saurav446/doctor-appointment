import React from 'react';
import { Navbar,Container,Nav ,NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'

const navbar = () => {
    return (
        <div > 
       <Navbar   expand="lg">
        <Container>
            <Navbar.Brand href="/">Doctor Protal</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
            <Nav >
               <Link to="/"> <Nav  >Home</Nav></Link> 
                <Link to="/dashboard/appointment"><Nav >Dashboard</Nav> </Link>  
                <Link to="/"><Nav >Admin</Nav></Link>   
                <Link to="/about"><Nav >About</Nav> </Link>  
                <Link to="/contact"><Nav >Contact</Nav> </Link>  
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
      </div>
    );
};

export default navbar;




