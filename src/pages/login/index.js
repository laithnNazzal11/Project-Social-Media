import React, { useContext } from 'react';
import './styles.css';
import { useState } from 'react';
import Home from "../Home";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import AlertContext from '../../components/AlertProvider';

export default function Index() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState('');

  const goToRegisterPage = () => {
    navigate("/register");
  };

  const {handleOpenSuccessAlert} = useContext(AlertContext)

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      const token = user.token;
      console.log(user);
      localStorage.setItem("token", token);
      setSuccessMessage('Login successful!');
      handleOpenSuccessAlert()

      navigate("/home");
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000); // Clear the success message after 3 seconds
    } catch (error) {
      setErrorMessage("Invalid email or password");
      console.log(error.message);
    }
  };

  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className='loginLeft'>
          <h3 className="loginLogo">Facebook</h3>
          <span className='loginDesc'>
            Connect with friends and the world around you on Facebook.
          </span>
        </div>

        <div className='loginRigth'>
          <div className="loginBox">
            <input
              placeholder="Email"
              className='loginInput'
              onChange={(event) => {
                setLoginEmail(event.target.value);
                setErrorMessage(""); 
              }}
            />

            <input
              placeholder="Password"
              className='loginInput'
              type='password'
              minLength={8}
              onChange={(event) => {
                setLoginPassword(event.target.value);
                setErrorMessage(""); 
              }}
            />

            {errorMessage && <p className="errorMessage">{errorMessage}</p>} {}
            {successMessage && <p>{successMessage}</p>}

            <button className='loginButton' onClick={login}>Log In</button>
            <span className='loginForget'>Forget Password ?</span>
            <button className='loginRegisterButton' onClick={goToRegisterPage}>Create a New Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}