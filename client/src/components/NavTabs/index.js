import { MDBNavbarNav } from "mdbreact";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useIsAuthenticated } from "../../utils/auth";
import mainlogo from "../../images/mainlogo.png"

function NavTabs() {
  const isAuth = useIsAuthenticated();
  return (
    <Navbar expand="lg">
      <Navbar.Brand className="p-0">
      <Nav.Link href="/">
        <img
          src={mainlogo}
          className="img-fluid animated fadeInLeft"
          href="/"
          style={{ width: "12rem", height: "3rem"}}
          alt=""
              />
              </Nav.Link>
      </Navbar.Brand>
      <MDBNavbarNav right>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto animated fadeInLeft" id="name">
          <Nav.Link href="/browse" style={{ fontSize: "20px", color: "black" }}>
              Browse
            </Nav.Link>
            <Nav.Link href="/createpost" style={{ fontSize: "20px", color: "black" }}>
              Add Item
            </Nav.Link>
            {!isAuth && <Nav.Link href="/signup" style={{ fontSize: "20px", color: "black" }}>
              Signup
            </Nav.Link>}
            {!isAuth && <Nav.Link href="/login" style={{ fontSize: "20px", color: "black" }}>
              Login
            </Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </MDBNavbarNav>
    </Navbar>
  );
}
export default NavTabs;
