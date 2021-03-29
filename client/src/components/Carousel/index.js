import React from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
} from "mdbreact";
import test1 from "../../images/test1.png";
import test4 from "../../images/test4.png";
import test5 from "../../images/test5.png";
import "./index.css";

const Carousel = () => {
  return (
    <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="img-fluid d-block w-100"
              src={test1}
              alt="First slide"
            />
            <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">EXCHANGE</h3>
            <p>Exchange records, cd's, tapes</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img 
              className="d-block w-100" 
              src={test4} alt="Second slide" 
              />
            <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">POST</h3>
            <p>Post old records, cd's, tapes</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img 
              className="d-block w-100" 
              src={test5} alt="Third slide" 
              />
            <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive elegant-color-dark">REDUCE WASTE</h3>
            <p className="elegant-color-dark">Give away records</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
};

export default Carousel;
