import React from 'react'
import { useNavigate } from "react-router-dom";
import './styles.css'



export default function Index() {
    const navigate = useNavigate();
    const goToHomePage = () => {
        navigate("/home");
      };

  return (
    
         <span className="logo" onClick={goToHomePage}>Facebook</span>

   
  )
}
