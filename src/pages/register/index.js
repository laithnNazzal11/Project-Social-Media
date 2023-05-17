import React from 'react'
import './styles.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import {createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from "../../firebase-config"
export default function Index() {
  
  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate("/");
  };

  const [registerEmail, setregisterEmailEmail] = useState("")
  const [registerEmailPassword, setregisterEmailPassword] = useState("")

  const register = async ()=> {
    try {
      const user = await createUserWithEmailAndPassword
         (auth,
         registerEmail,
         registerEmailPassword);
      console.log(user)
    }
    catch (error){
      console.log(error.massage)
    }

  }
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className='loginLeft'>
                <h3 class="loginLogo">Facebook</h3>
                <span className='loginDesc'>
                    Connect with friends and the world around you on Facebook.
                </span>
            </div>
       

           <div className='loginRigth'>
             <div class="loginBox">
                <input placeholder="Email" className='loginInput'
                 onChange={(event)=>{setregisterEmailEmail(event.target.value)}}/>
        
                <input placeholder="Username" className='loginInput'/>
                <input placeholder="Password" className='loginInput'
                 onChange={(event)=>{setregisterEmailPassword(event.target.value)}}/>
                
                <input placeholder="Password Again" className='loginInput'
                 onChange={(event)=>{setregisterEmailPassword(event.target.value)}}/>
                
                <button className='loginButton' onClick={register}>Sign Up</button>
                <span className='loginForget'>Forget Paswword ?</span>
                <button className='loginRegisterButton' onClick={goToLoginPage}>
                  Log into Account
                  </button>


             </div>

           </div>
        </div>
      
    </div>
  )
}
