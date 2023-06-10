import React from 'react'
import './styles.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase-config"
export default function Index() {

  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate("/");
  };

  const [registerEmail, setregisterEmailEmail] = useState("")
  const [registerEmailPassword, setregisterEmailPassword] = useState("")

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword
        (auth,
          registerEmail,
          registerEmailPassword);
      console.log(user)
    }
    catch (error) {
      console.log(error.massage)
    }

  }
  return (
    <div className='register'>
      <div className="registerWrapper">
        <div className='registerLeft'>
          <h3 class="registerLogo">Facebook</h3>
          <span className='registerDesc'>
            Connect with friends and the world around you on Facebook.
          </span>
        </div>


        <div className='registerRigth'>
          <div class="registerBox">
            <input placeholder="Email" className='registerInput'
              onChange={(event) => { setregisterEmailEmail(event.target.value) }} />

            <input placeholder="Username" className='registerInput' />
            <input placeholder="Password" className='registerInput' type='password'
              onChange={(event) => { setregisterEmailPassword(event.target.value) }} />

            <input placeholder="Password Again" className='registerInput' type='password'
              onChange={(event) => { setregisterEmailPassword(event.target.value) }} />

            <button className='registerButton' onClick={register}>Sign Up</button>
            <span className='registerForget'>Forget Paswword ?</span>
            <button className='registerRegisterButton' onClick={goToLoginPage}>
              Log into Account
            </button>


          </div>

        </div>
      </div>

    </div>
  )
}
