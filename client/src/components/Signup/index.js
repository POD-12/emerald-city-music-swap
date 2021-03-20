import { MDBBtn, MDBCol, MDBContainer, MDBRow, MDBIcon } from "mdbreact";
import React from "react";
import {useRef} from 'react';
import {useLogin} from "../../utils/auth"
import api from "../../utils/API"

function Signup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const login = useLogin();

  const handleSubmit = async event =>{
    event.preventDefault();
    const name = nameRef.current.value
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try{
      //register the user
      await api.register({name,email,password});
      //user registered succesfully, now log them in with the same info 
      await login({email,password})
    }catch(err){

      if(err.response && err.response.data) console.log(err.response.data);
    }
  }

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
          <form onSubmit={handleSubmit}>
            <p className="h3 text-center mb-3 teal-text">Create Account</p>
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
              ref = {nameRef}
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Your email
            </label>
            <input
              type="email"
              id="defaultFormRegisterEmailEx"
              className="form-control"
              ref = {emailRef}
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
              ref = {passwordRef}
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
