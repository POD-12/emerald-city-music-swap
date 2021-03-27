import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBCardImage,
  MDBCardTitle,
  MDBCard,
  MDBContainer,
} from "mdbreact";
import "./scrollbar.css";



// {/* we want to be able to have multiple posts two on a row? */}
const FeaturedCards = (props) => {
  
  
  


  const scrollContainerStyle = { width: "200px", maxHeight: "82px" };
  const imagestyle = { width: "100%", height: "40vh", objectFit: "cover" };
  return (

    <MDBCardBody className="carbody text-center pt-0">
      <h2 className="font-weight-bolder text-center">Recent posts</h2>
      <MDBContainer>

        <MDBRow className="text-md-left d-flex justify-content-center">
          {props.records.length > 0
            ? props.records.map((record) => {
                return (
                  <MDBCol
                  key={record._id}
                    sm="5"
                    lg="3"
                    md="6"
                    className="mt-5 mr-3 shadow-box-example z-depth-3"
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
                        <h4>{record.recordAlbumName}</h4>
                        <h6>Genre: {record.recordGenre}</h6>
                        <MDBIcon
                          icon="user-circle"
                          className="font-weight-bold mr-1"
                        />
                        <h6 className=" font-weight-bolder">
                          {record.recordPosterContact}
                        </h6>

                        <h6 className="">
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




                        <MDBBtn

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
    </MDBCardBody>
  );
};

export default FeaturedCards;
