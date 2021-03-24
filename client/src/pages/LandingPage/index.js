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

    return (
      <div> 
      <h1 className="text-center mt-5 mb-5">
     {/* Welcome! name of user? */}
 </h1>
  {console.log(records)}
  <FeaturedCards records = {records} />
</div>
    )
}
export default LandingPage;