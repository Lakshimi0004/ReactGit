import {useState} from 'react';
const Class1 =()=>{
    const [data,setData]=useState(false);
    const handlecolor=()=>{
        setData(!data);
    }
    return(
           <>
          <p>{data?"Hi!How are you":""}</p>
           <button onClick={handlecolor}>Submit</button>
           </>
    )
}
export default Class1;