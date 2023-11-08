import {useState} from 'react';
import {toast,Toaster} from 'react-hot-toast';
const State=()=>{
    const [form,setform]=useState({
        name:'Lakshimi Priya',
        email:'',
        phone:'',
        user:'',
        pass:''
    })
    const handleChange=(e)=>{
            setform({...form, [e.target.id]:e.target.value})
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(form);
        toast('Good Job!', {
            icon: '👏',
          });
    }
    return(
        <>
        <form>
            <input type="text" id="name" placeholder="Name" onChange={handleChange} value={form.name}/>
            <input type="email" id="email" placeholder="Email" onChange={handleChange}/><br/>
            <input type="num" id="phone" placeholder="Phone" onChange={handleChange}/><br/>
            <input type="text" id="user" placeholder="Username" onChange={handleChange}/><br/>
            <input type="password" id="pass" placeholder="Password" onChange={handleChange}/><br/>
            <button type="submit" onClick={handlesubmit}>Submit</button>
        </form>
        <Toaster/>
      </>
    )
}
export default State;