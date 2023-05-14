import React from 'react'
import './styles.css'

export default function index() {
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
                <input placeholder="Email" className='loginInput'/>
                <input placeholder="Username" className='loginInput'/>
                <input placeholder="Password" className='loginInput'/>
                <input placeholder="Password Again" className='loginInput'/>
                <button className='loginButton'>Sign Up</button>
                <span className='loginForget'>Forget Paswword ?</span>
                <button className='loginRegisterButton'>
                  Log into Account
                  </button>


             </div>

           </div>
        </div>
      
    </div>
  )
}
