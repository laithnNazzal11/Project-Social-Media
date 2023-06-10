import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from "react-router-dom";

export default function Index() {
    const navigate = useNavigate();
    const goToChatPage = () => {
        navigate("/chat");
      };
    const goToNovPage =()=> {
      navigate("/Notifications");
    }  

      const topBarIcons = [
        { icon: <PersonIcon />, badgeCount: 1 },
        { icon: <ChatIcon onClick={goToChatPage} />, badgeCount: 3 },
        { icon: <NotificationsIcon onClick={goToNovPage}/>, badgeCount: 4 }
      ];
      
      const topBarIconItems = topBarIcons.map((item, index) => (
        <div className="topbarIconItem" key={index}>
          {item.icon}
          <span className="topbarIconBadge">{item.badgeCount}</span>
        </div>
      ));

      
  return (
    
    <div className="topbarIcon">
        {topBarIconItems}
       
    </div>

  )
}
