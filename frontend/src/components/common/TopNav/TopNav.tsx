import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const NavBar: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" className="py-3 fixed-top">
      <Navbar.Brand href="#home">Jason Vallee</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="technologies">Technologies</Nav.Link>
          <Nav.Link href="history">Work History</Nav.Link>
          <Nav.Link href="pastprojects">Past Projects</Nav.Link>
          <Nav.Link href="funstuff">Fun Stuff</Nav.Link>
          <Nav.Link href="music">Music Recs</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
