import React,{useState,useEffect} from 'react';

import FeaturedCards from '../../components/FeaturedCards';
import API from "../../utils/API";

const LandingPage = () => {
    const [records,setRecords] = useState([])
    
    useEffect(()=>{
        API.findAllRecords().then(res =>{
          setRecords(res.data)
        })
    },[])


   const handleDelete = (record) =>{
console.log(record)
      API.deleteOneRecord(record)
      .then(res =>{
        console.log(res.data)
        setRecords( records.filter((thisRecord) => thisRecord._id !== record) )
        
      })
    }

    
      
 

    return (
      <div> 
      <h1 className="text-center mt-5 mb-5"></h1>
  {console.log(records)}
  <FeaturedCards records = {records} handleDelete = {handleDelete} />
</div>
    )
}
export default LandingPage;