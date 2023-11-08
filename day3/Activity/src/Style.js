import {useState} from 'react';
const Style =()=>{
    const [data,setData]=useState(false);
    const handlecolor=()=>{
        setData(!data);
    }
    return(
           <>
           <textarea className={data ? 'green' : 'red'}>HELLO</textarea>
           <button onClick={handlecolor}>Chng color</button>
           </>
    )
}
export default Style;