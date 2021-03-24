import { MDBBtn, MDBCol, MDBContainer, MDBRow, MDBInput} from "mdbreact";
import React, {useState} from "react";
import API from "../../utils/API"


function CreatePost() {

  const [records, setRecords] = useState({
    artist: "",
    album: ""
  })

  function handleChange(event) {
    console.log(event.target.value)
    setRecords({...records, [event.target.name]: event.target.value})
  }

  function handleSubmit(event) {
    event.preventDefault();
    API.createRecord(records).then(res => console.log(res))
      
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
            </MDBRow>
            
            <MDBRow>
              <MDBCol md="4">
                <div>
                  <select className="browser-default custom-select">
                    <option>Genre</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                  </select>
                </div>
              </MDBCol>

              
            </MDBRow>
            <MDBInput type="textarea" label="Other record Details" className="rounded" outline />

                <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupFileAddon01">
                    Upload
                  </span>
                </div>
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01"
                  />
                  <label className="custom-file-label" htmlFor="inputGroupFile01">
                    Choose file
                  </label>
                </div>
              </div>
          <div className="text-center text-md-center">
            <MDBBtn type="submit" style={{ borderRadius: "2rem" }} onClick={handleSubmit} >
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
