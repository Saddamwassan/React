import React,{useState, useEffect} from 'react'
import { fetchBookings } from '../../Services/BookingService';
import Card from '../card/Card'
function FetchCard() {
  const detail = fetchBookings();
  console.log(detail);
  // console.log(data);
    const [data, setdata] = useState([]);
    // useEffect(()=>{
    //    setdata(()=>fetchBookings());
    //   console.log(data);
    // },[])
  return (
    <div>

        <button onClick={fetchBookings}>Test</button>
        {/* {data.map((item)=>  
        // console.log(item),
        <Card data={item} key={index}/>
        // console.log(item)
        )} */}
    </div>
  )
}

export default FetchCard