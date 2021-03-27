import { MDBContainer, MDBFooter, MDBIcon } from "mdbreact";
import React from "react";

function Footer() {
  return (
    <MDBFooter className="font-small pt-4 black-text mt-5">
      <MDBContainer>
      
    </MDBContainer>
      <div className="footer-copyright text-center py-3">
        
          <div>&copy; 2021 Copyright: POD 12</div>
          <MDBContainer fluid>
          <a
          style={{ color: "black" }}
          className="ml-5"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/merikettapearl212"
        >
          <MDBIcon
            fab
            icon="github-square"
            style={{
              fontSize: "30px",
              color: "#3B3A3C",
              marginRight: "5px",
            }}
          />
          Meagan James{" "}
        </a>
        <a
          style={{ color: "black" }}
          className="ml-5"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/alejo-brand"
        >
          <MDBIcon
            fab
            icon="github-square"
            style={{
              fontSize: "30px",
              color: "#3B3A3C",
              marginRight: "5px",
            }}
          />
          Alejandro Brand{" "}
        </a>
        <a
          style={{ color: "black" }}
          className="ml-5"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Gavin867"
        >
          <MDBIcon
            fab
            icon="github-square"
            style={{
              fontSize: "30px",
              color: "#3B3A3C",
              marginRight: "5px",
            }}
          />
          Gavin Calkins
        </a>
        <a
          style={{ color: "black" }}
          className="ml-5 text-black "
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Dilberovicka31"
        >
          <MDBIcon
            fab
            icon="github-square"
            style={{
              fontSize: "30px",
              color: "#3B3A3C",
              marginRight: "5px",
            }}
          />
          Mia Dilberovic{" "}
        </a>

        </MDBContainer>
      </div>
    </MDBFooter>
  );
}
export default Footer;
