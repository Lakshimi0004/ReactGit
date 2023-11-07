import './Asset/CSS/style.css';
import {Award } from 'lucide-react';
const App=()=>{
    return(
        <>
        <div className='form1'>
        <form>
          <div className='fc'>
          <h1>REGISTRATION</h1>
          <label>
            NAME:       
            <input type='text' ></input>
            <br/><br/>
            EMAIL:      
            <input type='email'></input>
            <br/><br/>
            MOBILE:       
            <input type='number'></input>
            <br/><br/>
            USERNAME:
            <input type='text'></input>
            <br/><br/>
            PASSWORD:
            <input type='password'></input>
            <br/>
            <br/>
            <button className='mybtn'><Award/></button>
          </label>
          </div>
        </form>
        </div>
        </>
    )
}
export default App;