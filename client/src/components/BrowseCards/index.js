import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBCardImage,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBContainer,
} from "mdbreact";

import "./scrollbar.css";

// {/* we want to be able to have multiple posts two on a row? */}
const FeaturedCards = (props) => {
  const scrollContainerStyle = { width: "200px", maxHeight: "82px" };
  const imagestyle = { width: "100%", height: "40vh", objectFit: "cover" };
  return (
    <MDBContainer>
      <MDBRow className="text-md-left d-flex justify-content-center">
        {props.records.length > 0
          ? props.records.map((record) => {
              return (
                
                <MDBCol
                  sm="5"
                  lg="3"
                  md="6"
                  className="mt-5 mr-2 ml-2 shadow-box-example z-depth-3"
                >
                  {/* <MDBIcon pull="right" far icon="bookmark" size="2x"/> */}
                  <MDBCard className="mt-2">
                    <MDBCardImage
                      className="img-fluid mx-auto mb-md-0 mb-4 rounded"
                      src={"/images/" + record.image}
                      tag="img"
                      alt="Sample avatar"
                      style={imagestyle}
                      waves
                    />
                  </MDBCard>
                  <MDBCard className="mt-2 mb-2">
                    <MDBCardBody className="">
                      <MDBCardTitle>{record.recordArtist}</MDBCardTitle>
                      <h6>{record.recordAlbumName}</h6>
                      <h6>Genre: {record.recordGenre}</h6>
                      <MDBIcon
                        icon="user-circle"
                        className="font-weight-bold mr-1"
                      />
                      <h6 className=" font-weight-bolder">
                        {record.recordPosterContact}
                      </h6>

                      <h6 className="float-left">
                        Condition: {record.recordCondition}
                      </h6>
                      <div
                        className="scrollbar scrollbar-primary mx-auto"
                        style={scrollContainerStyle}
                      >
                        <div className="mt-2">{record.recordComments}</div>
                      </div>
                      <h6 className="mt-3">
                        <span>Posted: {new Date().toLocaleDateString()}</span>
                      </h6>

                      <MDBBtn onClick={() => props.handleDelete(record._id)}
                        color="elegant"
                        className="align-center mt-3"
                        style={{ borderRadius: "2rem" }}
                        size="sm"
                      >
                        Delete
                      </MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              );
            })
          : ""}
      </MDBRow>
    </MDBContainer>
  );
};

export default FeaturedCards;
