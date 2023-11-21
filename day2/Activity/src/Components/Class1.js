const Form=()=>{
    return(
        <div >
        <form style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',paddingTop:'100px'}}>
           
            <input type='text' placeholder="Name"></input>
            <input type='email' placeholder="Email"></input>
            <textarea placeholder="Feedback Message"></textarea>
            <button type="submit">Submit</button>
    
        </form>
        </div>
    )
}
export default Form;