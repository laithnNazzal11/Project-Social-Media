import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import './styles.css'
import ThemeContext from '../../../ThemeContext';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';



export default function Index() {
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/home");
  };

  const { Theme, selectedTheme, setSelectedTheme } = useContext(ThemeContext);

  const handleChangeTheme = () => {
    if (selectedTheme == "dark") {
      setSelectedTheme("light")
    }
    else {
      setSelectedTheme("dark")
    }
  }




  return (

    <div className='leftBar'>
      <span className="logo" onClick={goToHomePage}>Facebook</span>
      <SettingsBrightnessIcon onClick={handleChangeTheme} className='iconMood' style={{ color: "white" }} />
    </div>



  )
}
