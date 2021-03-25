import { MDBBtn, MDBCol, MDBRow} from "mdbreact";
import React,{useState,useEffect} from 'react';
import BrowseCards from '../../components/BrowseCards';
import API from "../../utils/API";


function BrowseForm() {
  const [records,setRecords] = useState([])
  const [filterRecords,setfilterRecords] = useState([])
  const [inputsObj, setimputsObj] = useState({})

  useEffect(()=>{
      API.findAllRecords().then(res =>{
        setRecords(res.data)
        setfilterRecords(res.data)
      })
  },[])

  const handleChange = (event) => {
    const clone = inputsObj
    clone[event.target.name] = event.target.value
    setimputsObj(clone)
  }

  function handleSubmit(event) {
    console.log(inputsObj.album)
    
    console.log(records)
    var result = records
    if (inputsObj.album) {
     result = result.filter(each => each.recordAlbumName === inputsObj.album)
    }
    if (inputsObj.artist) {
      result = result.filter(each => each.recordArtist === inputsObj.artist)
     }
    if (inputsObj.genre) {
      result = result.filter(each => each.recordGenre === inputsObj.genre)
     }
    
    setfilterRecords(result)
    console.log(result)
  }

  return (
    <div >
      <MDBRow className="d-flex justify-content-center pt-4">
      <MDBCol md="9" className="shadow-box-example rounded z-depth-1-half md-0 mb-3 ">
          <form>
          <p className="h3 text-center mb-3 black-text">Browse</p>
            <MDBRow>
              <MDBCol md="6">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Artist name" name= "artist" onChange={handleChange}/>
                </div>
              </MDBCol>
              <MDBCol md="6">
              <div className="form-group">
                  <input type="text" className="form-control" placeholder="Album" name= "album" onChange={handleChange}/>
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="6">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Genre" name= "genre" onChange={handleChange} />
                </div>
              </MDBCol>
              <MDBCol md="6">
              <div className="form-group">
                  <input type="text" className="form-control" placeholder="" />
                </div>
              </MDBCol>
            </MDBRow>
          </form>
          <div className="text-center text-md-center">
            <MDBBtn type="submit" color="elegant"  style={{ borderRadius: "2rem" }} onClick={handleSubmit}>
              Search
            </MDBBtn>
          </div>
          
        </MDBCol>
        </MDBRow>
      <MDBRow>
        <BrowseCards records = {filterRecords} />
      </MDBRow>
      </div>
      
    
  );
};
export default BrowseForm;
