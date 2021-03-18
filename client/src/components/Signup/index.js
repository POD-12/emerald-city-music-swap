import { MDBBtn, MDBCol, MDBContainer, MDBRow, MDBIcon } from "mdbreact";
import React from "react";
import "./index.css"

function Signup() {
  return (
    <MDBContainer className="shadow-box-example rounded z-depth-1-half mt-5 mb-5">
      <MDBRow>
        <MDBCol className="welcome-back-card gradient-custom" md="6 p-5">
          <div className="sign-in text-center text-white pt-5 m-5" id="sign-in">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <MDBBtn color="white" style={{ borderRadius: "2rem" }}>
              Login
            </MDBBtn>
          </div>
        </MDBCol>
        
        <MDBCol md="6 p-5">
          <form>
            <p className="h3 text-center mb-3 black-text">Create Account</p>
            <div className="text-center mb-3">
              <a href="#!" className="fa-lg p-1 m-.5 tw-ic">
                <MDBIcon
                  fab
                  icon="linkedin-in"
                  size="md"
                  className="grey-text"
                ></MDBIcon>
              </a>
              <a href="#!" className="fa-lg p-.5 m-2 tw-ic">
                <MDBIcon
                  fab
                  icon="google-plus-g"
                  size="md"
                  className="grey-text"
                ></MDBIcon>
              </a>
              <a href="#!" className="fa-lg p-1 m-.5 tw-ic">
                <MDBIcon
                  fab
                  icon="github"
                  size="md"
                  className="grey-text"
                ></MDBIcon>
              </a>
            </div>

            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Your name
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Your email
            </label>
            <input
              type="email"
              id="defaultFormRegisterEmailEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="defaultFormRegisterPasswordEx"
              className="grey-text"
            >
              Your password
            </label>
            <input
              type="password"
              id="defaultFormRegisterPasswordEx"
              className="form-control"
            />
            <div className="text-center mt-4">
              <MDBBtn rounded type="submit" color="elegant" style={{ borderRadius: "2rem" }}>
                Sign up
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
export default Signup;
