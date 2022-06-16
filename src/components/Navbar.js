import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";

export const NavbarComp = () => {
  return (
    <Navbar
      className="shadow-sm navbar navbar-expand-lg"
      expand="lg"
      bg="light"
    >
      <Container>
        <Navbar.Brand className="text-primary fw-bolder">
          ATools <span className="text-secondary">.</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button variant="primary" className="m-1">
            Start Free Trial
          </Button>
          <Button variant="secondary " className="text-white m-1">
            Login
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
