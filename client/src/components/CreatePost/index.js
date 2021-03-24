import { MDBBtn, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import React, {useState} from "react";
import API from "../../utils/API"


function CreatePost() {

  const [records, setRecords] = useState({
    artist: "",
    album: "",
    posterName:"",
    datePosted:"",
    recordComments:"",
    genre:""

  })

  function handleChange(event) {
    console.log(event.target.value)
    setRecords({...records, [event.target.name]: event.target.value})
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newRecord = {
    "recordAlbumName" :  records.album,
    "recordReleaseYear" : "",
    "recordSize" : "",
    "recordSpeed" : "",
    "recordArtist" : records.artist,
    "recordGenre" : records.genre,
    "recordCondition" : "",
    "recordComments" : records.recordComments,
    "recordPosterContact" :records.posterName,
    }
    API.createRecord(newRecord).then(res => console.log(res))
      
  }


  return (
    <MDBContainer className="mt-4 mb-5">
      <MDBRow className="d-flex justify-content-center">

      <MDBCol md="9" className=" shadow-box-example rounded z-depth-1-half md-0 mb-3 ">
          <form>
          <p className="h3 text-center mb-3 teal-text">Add New item</p>
            <MDBRow>
              <MDBCol md="6">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Artist Name" name="artist" value={records.artist} onChange={handleChange}/>
                </div>
              </MDBCol>
              <MDBCol md="6">
              <div className="form-group">
              <input type="text" className="form-control" placeholder="Album Name" name="album" value={records.album} onChange={handleChange}/>
                </div>
              </MDBCol>
              <MDBCol md="6">
              <div className="form-group">
              <input type="text" className="form-control" placeholder="poster name" name="posterName" value={records.posterName} onChange={handleChange}/>
                </div>
              </MDBCol>
              
              <MDBCol md="6">
              <div className="form-group">
              <input type="text" className="form-control" placeholder="record comments" name="recordComments" value={records.recordComments} onChange={handleChange}/>
                </div>
              </MDBCol>
              
              <MDBCol md="6">
              <div className="form-group">
              <input type="text" className="form-control" placeholder="Genre" name="genre" value={records.genre} onChange={handleChange}/>
                </div>
              </MDBCol>
            </MDBRow>
            {/* <MDBRow>
              <MDBCol md="6">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Price" />
                </div>
              </MDBCol>
              <MDBCol md="6">
              <div className="form-group">
                  <input type="text" className="form-control" placeholder="" />
                </div>
              </MDBCol>
            </MDBRow> */}
          </form>
          <div className="text-center text-md-center">
            <MDBBtn type="submit" style={{ borderRadius: "2rem" }} onClick={handleSubmit} >
              Create Post
            </MDBBtn>
          </div>
        </MDBCol>
      </MDBRow>

    </MDBContainer>
    
  );
};
export default CreatePost;
