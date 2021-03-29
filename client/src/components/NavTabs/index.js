import { MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBNavbarNav, MDBIcon } from "mdbreact";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useIsAuthenticated, useLogout } from "../../utils/auth";
import mainlogo from "../../images/mainlogo.png"

function NavTabs() {
  const isAuth = useIsAuthenticated();
  const logout = useLogout();
  return (
    <Navbar expand="lg" style={{maxWidth:"100vw", zIndex: 10}}>
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

        <MDBDropdown className="animated fadeInLeft" >
                <MDBDropdownToggle nav caret >
                  <span className="mr-2" style={{ fontSize: "20px", color: "black" }}>Post</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu >
                  <MDBDropdownItem href="/createpost">Record</MDBDropdownItem>
                  <MDBDropdownItem href="/cassette">Cassette</MDBDropdownItem>
                  <MDBDropdownItem href="/disc">Disc</MDBDropdownItem>
                  <MDBDropdownItem href="chart">Chart</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>

              <Nav className="mr-auto animated fadeInLeft" id="name">
          <Nav.Link href="/userPage" style={{ fontSize: "20px", color: "black"}}>
              Recent
            </Nav.Link>
            </Nav>

          <Nav className="mr-auto animated fadeInLeft" id="name">
          <Nav.Link href="/browse" style={{ fontSize: "20px", color: "black"}}>
              Browse
            </Nav.Link>
            </Nav>
          
           <MDBDropdown className="mr-2 animated fadeInLeft">
                <MDBDropdownToggle nav caret>
                  <span className="mr-2" style={{ fontSize: "20px", color: "black"}}><MDBIcon icon="user-circle" className="mr-1"/>Account</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                {!isAuth && <MDBDropdownItem href="/login">Login</MDBDropdownItem>}
                {!isAuth && <MDBDropdownItem href="/signup">Signup</MDBDropdownItem>}
                  <MDBDropdownItem href="/" onClick={logout}>Logout</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
          
         
        </Navbar.Collapse>
       
      </MDBNavbarNav>
    </Navbar>
  );
}
export default NavTabs;
