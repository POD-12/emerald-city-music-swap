import React from "react";
import {  MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn } from "mdbreact";


// {/* we want to be able to have multiple posts two on a row? */}
const FeaturedCards = (props) => {
  return (
    
      <MDBCardBody className="text-center pt-0">
        <h2 className="font-weight-bold text-center my-5">
          Recent posts
        </h2>

        <MDBRow className="text-md-left d-flex justify-content-center">

          {props.records.length > 0 ? props.records.map(record =>{
            return(
              <MDBCol lg="5" md="12" className="pr-0 pl-0 m-1 mb-2 shadow-box-example rounded z-depth-1-half">
            <div><MDBIcon pull="right" far icon="bookmark" size="2x"/></div>
            <MDBCol md="4" lg="6" className="pl-0 p-1 float-left">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg"
                className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                tag="img"
                alt="Sample avatar"
              />
            </MDBCol>
            <MDBCol md="6" lg="5" className="float-left p-1">
            <h4 className="font-weight-bold mb-1">{record.recordArtist}</h4>
            <h5 className="font-weight-bold grey-text mb-1">{record.recordAlbumName}</h5>
            <h6 className="grey-text">Genre: {record.recordGenre} </h6>
            <div>
              by <a href="#!" className="font-weight-bold">{record.recordPosterContact}</a>,
                date posted:{Date.now}
            </div>
            <div className="grey-text mt-2">
              {record.recordComments}
            </div>
            <h6 className="grey-text float-left">Condition: {record.condition}</h6>
            
            
            <MDBCol>
              <MDBBtn color="grey" className="float-bottom-left mt-5" style={{ borderRadius: "2rem" }} size="sm">
                Take me Home
              </MDBBtn>
              
            </MDBCol>

            
            </MDBCol>

          </MDBCol>
       
            )
          }):""}

        </MDBRow>
  
      </MDBCardBody>
   
  );
}

export default FeaturedCards;
