import { MDBNavbarNav } from "mdbreact";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function NavTabs() {
  return (
    <Navbar expand="lg">
      <Navbar.Brand
        id="name"
        className="animated fadeInLeft"
        href="/"
        style={{ fontSize: "30px", color: "black" }}
      >
        Emerald City Music Swap{" "}
      </Navbar.Brand>
      <MDBNavbarNav right>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto animated fadeInLeft" id="name">
            <Nav.Link href="/" style={{ fontSize: "20px", color: "black" }}>
              Logout
            </Nav.Link>
            <Nav.Link href="#" style={{ fontSize: "20px", color: "black" }}>
              Something
            </Nav.Link>
            <Nav.Link href="#" style={{ fontSize: "20px", color: "black" }}>
              Something
            </Nav.Link>
            <Nav.Link href="#" style={{ fontSize: "20px", color: "black" }}>
              Something
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </MDBNavbarNav>
    </Navbar>
  );
}
export default NavTabs;
