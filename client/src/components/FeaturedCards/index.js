import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React from "react";
import BeeGees from "../../images/Bee-Gees.jpeg";
import Beetles from "../../images/Beetles.jpeg";
import elvis from "../../images/elvis.jpeg";
import Flamin from "../../images/Flamin-Groovies.jpeg";
import Mothers from "../../images/Mothers.jpeg";
import RS from "../../images/RS.jpeg";

function FeaturedCards() {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
       
        <MDBCol md="4" className="mb-4 animated fadeInLeft ">
          <img src={BeeGees} className="img-fluid z-depth-5" alt="" />
        </MDBCol>
        <MDBCol md="4" className="mb-4 animated fadeInUp">
          <img src={Beetles} className="img-fluid z-depth-5" alt="" />
        </MDBCol>
        <MDBCol md="4">
          <p>Something here, text bla bla</p>
        </MDBCol>
        <MDBRow/>

        <MDBCol md="6" className="mb-4 animated fadeInRight">
          <img src={elvis} className="img-fluid z-depth-5" alt="" />
        </MDBCol>
        <MDBCol md="6" className="mb-4 animated fadeInLeft">
          <img src={Flamin} className="img-fluid z-depth-5" alt="" />
        </MDBCol>
        <MDBCol md="6" className="mb-4 animated fadeInUp">
          <img src={Mothers} className="img-fluid z-depth-5" alt="" />
        </MDBCol>
        <MDBCol md="6" className="mb-4 animated fadeInRight">
          <img src={RS} className="img-fluid z-depth-5" alt="" />
        </MDBCol>
      </MDBRow>{" "}
      
    </MDBContainer>
  );
}

export default FeaturedCards;
