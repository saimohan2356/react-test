import React from "react";
import "../styles/Login.scss";
function Login () {    
    return (
        <form className="container2">
         <div className="login">
            <div className="label2">
         <label form="Email">Email:</label>
      <input type="text" className="in"/>
      </div> 
      <div className="label2">
      <label form="Password">Password:</label>
      <input type="text" className="in"/>
      </div> 
         <button className="sub">Submit</button>
         </div>
        </form>
    )
}
export default Login;