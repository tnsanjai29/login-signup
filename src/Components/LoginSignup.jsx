import React, { useState } from 'react'
import './LoginSignup.css'

const LoginSignup = () => {

    const [action,setAction] = useState("sign Up");

  return (
    <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>: <div className="input">
                {/* <label>Name</label> */}
                <input type="text" placeholder='Name'/>
            </div>}
            
            
            <div className="input">
                {/* <label>Email</label> */}
                <input type="email" placeholder='Email'/>
            </div>
            <div className="input">
                {/* <label>Password</label> */}
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>: <div className="forget-password">Lost password? <span>click here!</span></div>}
        
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignup