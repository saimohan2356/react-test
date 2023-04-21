import React from "react";
import "../styles/Register.scss";
import { useNavigate } from "react-router-dom";
function Form() {
  const Navigate=useNavigate();
  return (
    <form className="container">
     <div className="text">
      <div className="label">
      <label form="firstName">firstName:</label>
      <input type="text" className="inp"/>
      </div>
      <div className="label">
      <label form="LastName">LastName:</label>
      <input type="text" className="inp" />
      </div>
      <div className="label">
      <label form="Phone">Phone:</label>
      <input type="number" maxLength="10" className="inp"/>  
      </div>
       < div className="label"> 
      <label form="Gender">Gender:</label>
      <input name="gender" type="checkbox"/>
      <label form="gender">Male</label>
      <input name="gender" type="checkbox"/>
      <label form="gender">Female</label>
      <input name="gender" type="checkbox"/>
      <label form="gender">Others</label>
      <div>
      <button onClick={()=>Navigate("/Userform")} className="bt">Next</button>
      </div>
      </div> 
      </div> 
     </form>
  )
}
export default Form;