import React from "react";
import {useRef} from 'react';
import {useLogin} from "../../utils/auth";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";

function Login() {

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async event => {
    event.preventDefault();

    const email = emailRef.current.value
    const password = passwordRef.current.value

    try{

      await login ({email,password});

    }catch(err){

      if( err.response && err.response.data ) console.log(err.response.data);
    }
  }

  //use login hook

  const login = useLogin();
  return (
    <MDBContainer className="mb-5">
      <MDBRow className=" d-flex justify-content-center">
      <MDBCol md="5 p-5 mt-5 mb-5 shadow-box-example rounded z-depth-1-half" className="login-form">
          <form onSubmit = {handleSubmit}>
            <div className="h4 text-center mb-4"><MDBIcon icon="user-circle" size="4x"/></div>
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
              Your email
            </label>
            <input
              type="email"
              id="defaultFormLoginEmailEx"
              className="form-control"
              ref = {emailRef}
            />
            <br />
            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
              Your password
            </label>
            <input
              type="password"
              id="defaultFormLoginPasswordEx"
              className="form-control"
              ref = {passwordRef}
            />
            <div className="text-center mt-4">

              <MDBBtn color="black" type="submit" style={{ borderRadius: ".25rem" }}>

                Login
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;