import React, { useContext } from 'react';
import './styles.css'
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import LeftbarfromTop from '../../components/LeftbarfromTop'
import { useNavigate } from "react-router-dom";
import Topbarleft from './topbarleft'
import Topbarcenter from './topbarcenter'
import Topbarrigth from './topbarRigth'
import ProfilePictureContext from '../../pages/Profile/ProfilePictureContext';
import ThemeContext from '../../ThemeContext';


export default function Index() {
  const profilePicture = useContext(ProfilePictureContext);
  const navigate = useNavigate();

  const logout = () => {
    console.log('Logout function called');
    localStorage.removeItem('token');
    console.log('Token removed from localStorage');
    navigate('/');
  };

  const goToProfilePage = () => {
    navigate('/profile');
  };

  const goToChatPage = () => {
    navigate('/chat');
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const profilePictureContext = useContext(ProfilePictureContext);

  const { Theme, selectedTheme, setSelectedTheme } = useContext(ThemeContext);

  return (
    <>
      <div className="topbarContanier" style={{ backgroundColor: Theme.third, color: Theme.secendary }}>
        <div className="topbarLeft">
          <Topbarleft />
        </div>
        <div className="topbarCenter">
          <Topbarcenter />
        </div>
        <div className="topbarRigth">
          <div className="TobIcon">
            <Topbarrigth />
          </div>
          <img src={profilePictureContext.profilePicture} alt="" className="topbarImg" onClick={goToProfilePage} />
          <button className="buttonLogOut" onClick={logout} style={{ color: Theme.third }}>
            Logout
          </button>
        </div>
      </div>
      <div className="burgerMenu" style={{ backgroundColor: Theme.third, color: Theme.secendary }}>
        <MenuIcon />
        <button className="buttonLogOut2" onClick={logout} style={{ backgroundColor: Theme.five }}>
          Logout
        </button>
      </div>
      <div className="leftfromTop">
        <LeftbarfromTop />
      </div>
    </>
  );
}

