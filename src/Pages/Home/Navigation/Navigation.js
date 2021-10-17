import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../logo/logo2.png";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <Navbar className="bg-color" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} className="logo-img" alt="" />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/login">Log In</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
