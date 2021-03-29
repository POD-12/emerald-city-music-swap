import { MDBBtn, MDBCol, MDBContainer, MDBRow, MDBInput } from "mdbreact";
import "./post.css";

function CreatePost() {

  return (
    <MDBContainer className="create-post mt-5 mb-5 shadow-box-example rounded z-depth-1-half">
      <MDBRow className="d-flex justify-content-center">

        <MDBCol md="7" className="p-4 post-card shadow-box-example rounded z-depth-1-half mt-5 mb-5 ">
          <form className="custom-file" action="/api/recordImage" method="post" enctype="multipart/form-data">
            <h2 className="recent-header rounded p-2 m-1 font-weight-bolder text-center">Post A Record</h2>
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
              <MDBCol md="5">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your Email" name="recordPosterContact" />
                </div>
              </MDBCol>
              <MDBCol md="4" className="mb-3">
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
              <MDBBtn className="mb-5"type="submit" color="elegant" style={{ borderRadius: "2rem" }}   >
                Create Post
            </MDBBtn>
            </div>

          </form>
         
        </MDBCol>
      </MDBRow>

    </MDBContainer>

  );
};
export default CreatePost;