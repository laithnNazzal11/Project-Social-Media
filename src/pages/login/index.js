import React from 'react'
import './styles.css'
import { useState } from 'react';
import Home from "../Home"
import { useNavigate } from "react-router-dom";
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../../firebase-config"

export default function Index() {
  
  const [loginEmail, setloginEmail] = useState("")
  const [loginPassword, setloginPassword] = useState("")

  const navigate = useNavigate();

  const goToRegisterPage = () => {
    navigate("/register");
  };

  const goToHomePage = () => {
    if(loginEmail=="laith.gorge@gmail.com" && loginPassword=="laith nazzal")
    navigate("/home");
  };




 
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword
         (auth,
          loginEmail,
          loginPassword
          );
      console.log(user)
      return <Home/>
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
                 onChange={(event)=>{setloginEmail(event.target.value)}}/>
                
                <input placeholder="Password" className='loginInput'
                onChange={(event)=>{setloginPassword(event.target.value)}}/>

                <button className='loginButton'onClick={goToHomePage} >Log In</button>
                <span className='loginForget'>Forget Paswword ?</span>
                <button className='loginRegisterButton' onClick={goToRegisterPage}>Cerate a New Account</button>


             </div>

           </div>
        </div>
      
    </div>
  )
}
