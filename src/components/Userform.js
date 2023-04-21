import React from "react";
import "../styles/Userform.scss";
import { useNavigate } from "react-router-dom";
function Userform() {
  const Navigate= useNavigate();
    return (
    <form className="container1">
        <div className="text1">
        <div className="label12">
        <label form="Address">Address:</label>
      <input type="Address" maxLength="30" className="inp1"/>
      </div>
      <div className="label12">
      <label form="Pincode">Pincode:</label>
      <input type="Pincode" maxLength="6" className="inp1"/>
      </div> 
      <div className="label1">
      <label form="city">city:</label>
      <input type="text" className="inp1"/>
      </div> 
      <div className="label1">
      <label form="state">state:</label>
      <input type="text" className="inp1"/>
      </div>
      <button onClick={()=>Navigate("/Login")} className="btn">Next</button>
        </div>
    </form>
    )
}
export default Userform;