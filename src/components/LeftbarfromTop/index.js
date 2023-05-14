import React from 'react'
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
export default function index() {
  return (
    
    <div className='leftbarr'>
   
      <div className="leftbarWrapper">


        <ul className="leftbarList">
         


          <li className="leftbarListItemm">
            <FeedIcon className="sidebarIcon"/>
            <span className="leftbarListItemText">Feed</span>
          </li>

          <li className="leftbarListItemm">
            <ChatIcon className="sidebarIcon"/>
            <span className="leftbarListItemText">Chat</span>
          </li>

          <li className="leftbarListItemm">
            <PlayCircleIcon className="sidebarIcon"/>
            <span className="leftbarListItemText">Videos</span>
          </li>

          <li className="leftbarListItemm">
            <GroupIcon className="sidebarIcon"/>
            <span className="leftbarListItemText">Groub</span>
          </li>

          <li className="leftbarListItemm">
            <BookmarkIcon className="sidebarIcon"/>
            <span className="leftbarListItemText">Bookmarks</span>
          </li>

          <li className="leftbarListItemm">
            <ContactSupportIcon className="sidebarIcon"/>
            <span className="leftbarListItemText">Questions</span>
          </li>

          <li className="leftbarListItemm">
            <WorkIcon className="sidebarIcon"/>
            <span className="leftbarListItemText">Jops</span>
          </li>

          <li className="leftbarListItemm">
            <EventIcon className="sidebarIcon"/>
            <span className="leftbarListItemText">Event</span>
          </li>

          <li className="leftbarListItemm">
            <GamesIcon className="sidebarIcon"/>
            <span className="leftbarListItemText">Courses</span>
          </li>

        </ul>
        
      </div>
   
    </div>
  )
}
