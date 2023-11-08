const Student=(props)=>{
    return(
        <div className="LP">

        <table border='10px' height='300px' width='300px'>
            <tr>
                <td><b>FIELD</b></td>
                <td><b>DATA</b></td>
            </tr>
            <tr>
                <td>STUDENT NAME</td>
                <td>{props.name}</td>
            </tr>
            <tr>
                <td>ROLL NO</td>
                <td>{props.roll}</td>
            </tr>
            <tr>
                <td>MOBILE</td>
                <td>{props.mob}</td>
            </tr>
            <tr>
                <td>YEAR</td>
                <td>{props.year}</td> 
            </tr>
            <tr>
                <td>DEPARTMENT</td>
                <td>{props.depa}</td>
            </tr>
        </table>
        </div>
    )
}
export default Student;