import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
import icon from "./icon.png";

const NavbarC = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/" className="text-warning">
            <img src={icon} width="40px" height="40px" alt="nav_icon" />
            Happy Recipe
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Link className="nav_links" to="/">
                Home
              </Link>

              <Link className="nav_links" to="/about">
                About Us
              </Link>
              {/* <Link to="/admin">Admin</Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarC;
