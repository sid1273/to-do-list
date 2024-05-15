// Header.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" style={{padding: '20px'}}>
      <Container className="d-flex justify-content-center">
        <Navbar.Brand href="#" style={{fontSize:'20px'}}>To-Do List</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
