import { MDBBtn, MDBCol, MDBRow } from "mdbreact";
import React, { useState, useEffect } from 'react';
import BrowseCards from '../../components/BrowseCards';
import API from "../../utils/API";


function BrowseForm() {
  const [records, setRecords] = useState([])
  const [filterRecords, setfilterRecords] = useState([])
  const [inputsObj, setimputsObj] = useState({})

  useEffect(() => {
    API.findAllRecords().then(res => {
      setRecords(res.data)
      setfilterRecords(res.data)
    })
  }, [])

  const handleChange = (event) => {
    const clone = inputsObj
    clone[event.target.name] = event.target.value
    setimputsObj(clone)
  }

  function handleSubmit(event) {
    // console.log(inputsObj.album)

    // console.log(records)
    var result = records
    if (inputsObj.album) {
      result = result.filter(each => each.recordAlbumName.includes(capitalizeFirstletter(inputsObj.album)))
    }
    if (inputsObj.artist) {
      result = result.filter(each => each.recordArtist.includes(capitalizeFirstletter(inputsObj.artist)))
    }
    if (inputsObj.genre) {
      result = result.filter(each => each.recordGenre === capitalizeFirstletter(inputsObj.genre))
    }

    setfilterRecords(result)
    // console.log(result)
  }

  const capitalizeFirstletter = (word) => {

    var wordArray = word.split('')
    var upperCaseFirst = wordArray[0].toLocaleUpperCase()
    wordArray.splice(0, 1, upperCaseFirst)
    word = wordArray.join('')
    return word
  }

  return (
    <div >
      <MDBRow className="d-flex justify-content-center pt-4">
        <MDBCol md="9" className="shadow-box-example rounded z-depth-1-half md-0 ">
          <form>
          <h2 className="recent-header rounded p-2 m-1 font-weight-bolder text-center">Browse Records</h2>
            <MDBRow>
              <MDBCol md="6">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Artist name" name="artist" onChange={handleChange} />
                </div>
              </MDBCol>
              <MDBCol md="6">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Album" name="album" onChange={handleChange} />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="6">
                <div className="form-group">

                  <select className="browser-default custom-select" name="genre" onChange={handleChange} >
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
              <MDBCol md="6">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="" />
                </div>
              </MDBCol>
            </MDBRow>
          </form>
          <div className="text-center text-md-center">
            <MDBBtn type="submit" color="elegant" style={{ borderRadius: "2rem" }} onClick={handleSubmit}>
              Search
            </MDBBtn>
          </div>

        </MDBCol>
      </MDBRow>
      <MDBRow>
        <BrowseCards records={filterRecords} />
      </MDBRow>
    </div>


  );
};
export default BrowseForm;
