import { MDBNavbarNav } from "mdbreact";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function NavTabs() {
  return (
    <Navbar className="mr-3 ml-3" expand="lg">
      <Navbar.Brand  href="/" style={{fontSize:"30px", color:"black"}}>Emerald City Music Swap </Navbar.Brand>
      <MDBNavbarNav right>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/" style={{fontSize:"25px", color:"black"}}>Signup</Nav.Link>
          <Nav.Link href="#" style={{fontSize:"25px", color:"black"}}>Something</Nav.Link>
          <Nav.Link href="#" style={{fontSize:"25px", color:"black"}}>Something</Nav.Link>
          <Nav.Link href="#" style={{fontSize:"25px", color:"black"}}>Something</Nav.Link>
          <Nav.Link href="#" style={{fontSize:"25px", color:"black"}}>Art</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </MDBNavbarNav>
    </Navbar>
  );
}
export default NavTabs;