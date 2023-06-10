import React, { useContext } from 'react'
import './styles.css'
import {Users} from '../../dummyData'
import Closefreind from './CloseFriend'
import FeedIcon from '@mui/icons-material/Feed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import WorkIcon from '@mui/icons-material/Work';
import GroupIcon from '@mui/icons-material/Group';
import EventIcon from '@mui/icons-material/Event';
import GamesIcon from '@mui/icons-material/Games';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeContext from '../../ThemeContext';

export default function Index() {
  const sidebarItems = [
    { icon: <FeedIcon className="sidebarIcon" />, name: 'Feed' },
    { icon: <ChatIcon className="sidebarIcon" />, name: 'Chat' },
    { icon: <PlayCircleIcon className="sidebarIcon" />, name: 'Videos' },
    { icon: <GroupIcon className="sidebarIcon" />, name: 'Group' },
    { icon: <BookmarkIcon className="sidebarIcon" />, name: 'Bookmarks' },
    { icon: <ContactSupportIcon className="sidebarIcon" />, name: 'Questions' },
    { icon: <WorkIcon className="sidebarIcon" />, name: 'Jobs' },
    { icon: <EventIcon className="sidebarIcon" />, name: 'Event' },
    { icon: <GamesIcon className="sidebarIcon" />, name: 'Courses' }
  ];

  const sidebarItemsList = sidebarItems.map((item, index) => (
    <li className="leftbarListItem" key={index}>
      {item.icon}
      <span className="leftbarListItemText">{item.name}</span>
    </li>
  ));

  const {Theme,selectedTheme,setSelectedTheme} = useContext(ThemeContext);

  const handleChangeTheme = () => {
    if(selectedTheme=="dark") {
      setSelectedTheme("light")
    }
    else {
      setSelectedTheme("dark")
    }
  }
  
  return (
    
    <div className='leftbar' style={{backgroundColor:Theme.main,color:Theme.secendary}}>
      <div className='burgerMenu'>
              <MenuIcon/>
       </div>

      <div className="leftbarWrapper">
        <button onClick={handleChangeTheme}>change mood</button>
        <ul className="leftbarList">
           {sidebarItemsList}
        </ul>


        <button className="leftbarButton">Show More</button>
        <hr className="leftbarHr"/>

        <ul className="leftbatFriendList">
        
          
          {Users.map((u)=> (
          <Closefreind key={u.id} user={u}/>

            ))}


        </ul>
      </div>
    </div>
  )
}
