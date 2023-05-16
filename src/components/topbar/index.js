import React from 'react';
import './styles.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import LeftbarfromTop from '../../components/LeftbarfromTop'
export default function index() {
  return (
    <>
    <div className="topbarContanier">
        <div className="topbarLeft">
       
            <span className="logo">Facebook</span>

            
        </div>
        
        <div className="topbarCenter">
            <div className="searchbar">
                <SearchIcon className="searchIcon"/>
                <input className="searchInput" placeholder="Search for frindes,post or video"></input>
            </div>
        </div>

        <div className="topbarRigth">
            <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
           
            </div>

            <div className="topbarIcon">
                <div className="topbarIconItem">
                    <PersonIcon/>
                    <span className="topbarIconBadge">1</span>

                </div>

                <div className="topbarIconItem">
                    <ChatIcon/>
                    <span className="topbarIconBadge">3</span>

                </div>

                <div className="topbarIconItem">
                    <NotificationsIcon/>
                    <span className="topbarIconBadge">4</span>

                </div>
            </div>

             <img src="/assest/person/1.jpeg" alt="" className="topbarImg"></img>   
           
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

