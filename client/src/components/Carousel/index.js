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
import exchange from "../../images/exchange.jpg";
import exchangeP from "../../images/exchange-records-cds-tapes.jpg";
import postH from "../../images/postH.jpg";
import postP from "../../images/postP.jpg";
import reduceWasteH from "../../images/reduceWasteH.jpg";
import recycleP from "../../images/recycleP.jpg";


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
        
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img 
              className="d-block w-100" 
              src={test4} alt="Second slide" 
              />
            <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
          <img
              src={postH}
              className="img-fluid"
              href="/"
              style={{ width: "8rem", height: "2rem"}}
              alt=""
                  />
                 <div>
            <img
              src={postP}
              className="img-fluid"
              href="/"
              style={{ width: "35rem", height: "2rem"}}
              alt=""
                  />
                  </div>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img 
              className="d-block w-100" 
              src={test5} alt="Third slide" 
              />
            <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
          <img
              src={reduceWasteH}
              className="img-fluid"
              href="/"
              style={{ width: "16rem", height: "2rem"}}
              alt=""
                  />
                 <div>
            <img
              src={recycleP}
              className="img-fluid"
              href="/"
              style={{ width: "35rem", height: "2rem"}}
              alt=""
                  />
                  </div>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="img-fluid d-block w-100"
              src={test1}
              alt="First slide"
            />
            <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
              <img
              src={exchange}
              className="img-fluid"
              href="/"
              style={{ width: "12rem", height: "2rem"}}
              alt=""
                  />
                 <div>
            <img
              src={exchangeP}
              className="img-fluid"
              href="/"
              style={{ width: "35rem", height: "2rem"}}
              alt=""
                  />
                  </div>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
};

export default Carousel;
