
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
              <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Player Explorer</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link to="#home">Home</Nav.Link>
      <Nav.Link to="/playerDetails">Player Details</Nav.Link>
    </Nav>
  </Navbar>
        </div>
    );
};

export default Header;