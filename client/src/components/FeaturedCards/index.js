import React from "react";
import {  MDBRow, MDBCol, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";


// {/* we want to be able to have multiple posts two on a row? */}
const FeaturedCards = (props) => {
  return (
    
      <MDBCardBody className="text-center pt-0">
        <h2 className="font-weight-bold text-center my-5">
          Recent posts
        </h2>

        <MDBRow className="d-flex justify-content-center">

          {props.records.length > 0 ? props.records.map(record =>{
            return(
                  <MDBCol lg="5" md="12" className="mb-lg-0 mb-4 p-1 mx-1 shadow-box-example z-depth-1-half">
            <div><MDBIcon pull="right" far icon="bookmark" size="2x"/></div>
            <MDBView className="mb-2">
            
              <img
                className="img-fluid w-50 mx-auto d-block"
                src="https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg"
                alt=""
              />
              <MDBMask overlay="white-slight" />
            </MDBView>
            <div className="font-weight-bold ">
              <h3>Album Name: {record.recordAlbumName} </h3>
            <div>Artist Name: {record.recordArtist}</div>
            </div>
            <div>
            by <a href="#!" className="font-weight-bold">{record.recordPosterContact}</a>,
              date posted:{Date.now}
            </div>
            <div className="dark-grey-text text-left p-2">
              {record.recordComments}
            </div>
            <MDBBtn color="grey" style={{ borderRadius: "2rem" }} size="md">
              Take me Home
            </MDBBtn>
          </MDBCol>
       
            )
          }):""}

        
          
        </MDBRow>
  
  
      </MDBCardBody>
   
  );
}

export default FeaturedCards;
