function Form(){
    return(
  <>
    <div className="form">
    <div className="form-container">
    <input  className ="form-element" type="text" value={"First Name"}/>
     <input className ="form-element" type="text" value={"Second Name"}/>
     <input className ="form-element" type="text" value={"Subject"}/>
     <input className ="form-element" type="number" value={"Grade"}/>
     <input className ="form-element" type="date" value={"Date"}/>
     <input className ="form-element input-button" type="submit" value={"Save"}/>
     <input className ="form-element input-button" type="submit" value={"Clear"}/>
     </div>
    </div> 
  </> 
    )
  }
  export default Form;