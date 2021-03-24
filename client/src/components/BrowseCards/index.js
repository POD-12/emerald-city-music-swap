import React from "react";
import {  MDBRow, MDBCol, MDBIcon, MDBBtn } from "mdbreact";

import "./scrollbar.css";


// {/* we want to be able to have multiple posts two on a row? */}
const FeaturedCards = (props) => {
 

  const scrollContainerStyle = { width: "220px", maxHeight: "200px" };
  return (
    
      

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
            <h4 className="font-weight-bold mb-0">{record.recordArtist}</h4>
            <h5 className="font-weight-bold dark-grey-text mb-1">{record.recordAlbumName}</h5>
            <h6 className="grey-text mb-0">Genre: {record.recordGenre} </h6>

            <div className="dark-grey-text">
            <MDBIcon icon="user-circle" className="grey-text mr-1"/>
            <a href="#!" className="grey-text font-weight-bolder">{record.recordPosterContact}</a>,
                01/20/20{Date.now}
            </div>
            <h6 className="grey-text float-left">Condition: {record.recordCondition}</h6>

            <div className="scrollbar scrollbar-primary mx-auto" style={scrollContainerStyle}>
                <div className="grey-text mt-2">
                  {record.recordComments}
                </div>
            </div>
            
            
            <MDBBtn color="grey" className="d-flex justify-content-end " style={{ borderRadius: "2rem" }} size="sm">
                Get
              </MDBBtn>
            
              <MDBIcon icon="trash-alt" className="float-right" />

            
            </MDBCol>

          </MDBCol>
       
            )
          }):""}

        </MDBRow>
  
      
   
  );
}

export default FeaturedCards;
