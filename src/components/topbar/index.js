import React from 'react';
import './styles.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import LeftbarfromTop from '../../components/LeftbarfromTop'
import { useNavigate } from "react-router-dom";

export default function Index() {
    const navigate = useNavigate();

    const goToProfilePage = () => {
      navigate("/profile");
    };

    const navigatee = useNavigate();

    const goToHomePage = () => {
      navigatee("/home");
    };

    const navigateee = useNavigate();

    const goToChatPage = () => {
      navigateee("/chat");
    };
  return (
    <>
    <div className="topbarContanier">
        <div className="topbarLeft">
       
            <span className="logo" onClick={goToHomePage}>Facebook</span>

            
        </div>
        
        <div className="topbarCenter">
            <div className="searchbar">
                <SearchIcon className="searchIcon"/>
                <input className="searchInput" placeholder="Search for frindes,post or video"></input>
            </div>
        </div>

        <div className="topbarRigth">


            <div className="topbarIcon">
                <div className="topbarIconItem">
                    <PersonIcon/>
                    <span className="topbarIconBadge">1</span>

                </div>

                <div className="topbarIconItem">
                    <ChatIcon onClick={goToChatPage}/>
                    <span className="topbarIconBadge">3</span>

                </div>

                <div className="topbarIconItem">
                    <NotificationsIcon/>
                    <span className="topbarIconBadge">4</span>

                </div>
            </div>

             <img src="/assest/person/11.png" alt="" className="topbarImg" onClick={goToProfilePage}></img>   
           
        </div>
       
    </div>

    <div className='burgerMenu'>
              <MenuIcon/>
    </div>
    <div class="leftfromTop">
        <LeftbarfromTop/>
    </div>
    </>
  )
}

