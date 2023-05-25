import React from 'react';
import './styles.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import LeftbarfromTop from '../../components/LeftbarfromTop'
import { useNavigate } from "react-router-dom";
import Topbarleft from './topbarleft'
import Topbarcenter from './topbarcenter'
import Topbarrigth from './topbarRigth'

export default function Index() {
    const navigate = useNavigate();

    const goToProfilePage = () => {
      navigate("/profile");
    };


 

    const navigateee = useNavigate();

    const goToChatPage = () => {
      navigateee("/chat");
    };
  return (
    <>
    <div className="topbarContanier">
        <div className="topbarLeft">
          <Topbarleft/>
        </div>
        
        <div className="topbarCenter">
          <Topbarcenter/>

        </div>

        <div className="topbarRigth">
          <Topbarrigth/>


            

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

