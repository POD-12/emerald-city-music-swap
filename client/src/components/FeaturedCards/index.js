import React from "react";
import {  MDBRow, MDBCol, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";


// {/* we want to be able to have multiple posts two on a row? */}
const FeaturedCards = () => {
  return (
    
      <MDBCardBody className="text-center pt-0">
        <h2 className="font-weight-bold text-center my-5">
          Recent posts
        </h2>

        <MDBRow className="text-center">
          <MDBCol lg="5" md="12" className="mb-lg-0 mb-4 p-1 mx-1 shadow-box-example z-depth-1-half">
            <div><MDBIcon pull="right" far icon="bookmark" size="2x"/></div>
            <MDBView className="mb-2">
            
              <img
                className="img-fluid w-50 mx-auto d-block"
                src="https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
              />
              <MDBMask overlay="white-slight" />
            </MDBView>
            <div className="font-weight-bold ">
              <h3>Album Name</h3>
              <div>Artist Name</div>
            </div>
            <div>
              by <a href="#!" className="font-weight-bold">poster name</a>,
              date posted
            </div>
            <div className="dark-grey-text text-left p-2">
              Record details that owner added for info on record from text imput.
            </div>
            <MDBBtn color="pink" rounded size="md">
              Take me Home
            </MDBBtn>
          </MDBCol>
          <MDBCol lg="5" md="12" className="mb-lg-0 mb-4 p-1 mx-1 shadow-box-example z-depth-1-half">
            <div><MDBIcon pull="right" far icon="bookmark" size="2x"/></div>
            <MDBView className="mb-2">
            
              <img
                className="img-fluid w-50 mx-auto d-block"
                src="https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
              />
              <MDBMask overlay="white-slight" />
            </MDBView>
            <div className="font-weight-bold ">
              <h3>Album Name</h3>
              <div>Artist Name</div>
            </div>
            <div>
              by <a href="#!" className="font-weight-bold">poster name</a>,
              date posted
            </div>
            <div className="dark-grey-text text-left p-2">
              Record details that owner added for info on record from text imput.
            </div>
            <MDBBtn color="pink" rounded size="md">
              Take me Home
            </MDBBtn>
          </MDBCol>

          
        </MDBRow>
      </MDBCardBody>
   
  );
}

export default FeaturedCards;
