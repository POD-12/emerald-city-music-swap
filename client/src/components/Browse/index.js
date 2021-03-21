import { MDBBtn, MDBCol, MDBContainer, MDBRow, MDBInput} from "mdbreact";
import React from "react";


function Browse() {
  return (
    <MDBContainer className="shadow-box-example rounded z-depth-1-half mt-5 mb-5">
      <MDBRow className="d-flex justify-content-center">
        
        <MDBCol md="6 p-5 ">
        <form>
            <p className="h3 text-center mb-3 black-text">Browse</p>
       
        <MDBInput hint="Search" type="text" containerClass="mt-0" />
        <br />
        
        <MDBInput hint="Search" type="text" containerClass="mt-0" />
        <br />
        
        <MDBInput hint="Search" type="text" containerClass="mt-0" />
        <br />
        
        <MDBInput hint="Search" type="text" containerClass="mt-0" />
        <div className="text-center mt-4">
          <MDBBtn color="unique" type="submit">
           Search
          </MDBBtn>
        </div>
      </form>
         
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
export default Browse;
