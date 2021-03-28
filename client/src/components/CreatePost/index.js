import { MDBBtn, MDBCol, MDBContainer, MDBRow, MDBInput } from "mdbreact";
// import React, {useState} from "react";
// import API from "../../utils/API"


function CreatePost() {

  return (
    <MDBContainer className="mt-4 mb-5">
      <MDBRow className="d-flex justify-content-center">

        <MDBCol md="9" className=" shadow-box-example rounded z-depth-1-half md-0 mb-3 ">
          <form className="custom-file" action="/api/recordImage" method="post" enctype="multipart/form-data">
            <p className="h3 text-center mb-3 black-text">Post A Record</p>
            <MDBRow>
              <MDBCol md="6">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Artist Name" name="recordArtist" />
                </div>
              </MDBCol>
              <MDBCol md="6">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Album Name" name="recordAlbumName" />
                </div>
              </MDBCol>
              <MDBCol md="6">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your Email" name="recordPosterContact" />
                </div>
              </MDBCol>
              <MDBCol md="4">
                <div>
                  
                  <select className="browser-default custom-select" name="recordGenre">
                    <option value="" selected disabled>Genre</option>
                    <option value="Alternative">Alternative</option>
                    <option value="Blues">Blues</option>
                    <option value="Classical">Classical</option>
                    <option value="Country">Country</option>
                    <option value="Dance">Dance</option>
                    <option value="Disco">Disco</option>
                    <option value="Hip-Hop/Rap">Hip-Hop/Rap</option>
                    <option value="Indie">Indie</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Latin">Latin</option>
                    <option value="Metal">Metal</option>
                    <option value="Opera">Opera</option>
                    <option value="Pop">Pop</option>
                    <option value="Reggae">Reggae</option>
                    <option value="Rock">Rock</option>
                    <option value="Rhythm and Blues">Rhythm and Blues</option>
                    <option value="Soul">Soul</option>
                    <option value="World">World</option>
                  </select>
                </div>
              </MDBCol>
              <MDBCol md="3">
                <div>
                  <select  className="browser-default custom-select" name="recordCondition" >
                    <option value="" selected disabled>Condition</option>
                    <option value="Mint">Mint</option>
                    <option value="Near Mint">Near Mint</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Very Good Plus">Very Good Plus</option>
                    <option value="Very Good">Very Good</option>
                    <option value="Good">Good</option>
                    <option value="Poor/Fair">Poor/Fair</option>
                  </select>
                </div>
              </MDBCol>
            </MDBRow>


            <MDBInput type="textarea" label="Other record details" name="recordComments" className="rounded" />

            <div className="input-group">
              <div className="input-group-prepend">
                {/* <span className="input-group-text" id="inputGroupFileAddon01">
                    Upload
                  </span> */}
              </div>

              <MDBInput
                type="file"
                name="avatar"
                className="custom-file-input"
                id="inputGroupFile01"
                aria-describedby="inputGroupFileAddon01"
                label="Click to Upload Image"
              />
              {/* <input type="submit"/> */}


            </div>
            <div className="text-center text-md-center">
              <MDBBtn type="submit" color="elegant" style={{ borderRadius: "2rem" }}   >
                Create Post
            </MDBBtn>
            </div>

          </form>
          <div className="mb-5"></div>
        </MDBCol>
      </MDBRow>

    </MDBContainer>

  );
};
export default CreatePost;