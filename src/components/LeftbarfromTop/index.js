import React, { useContext } from 'react'
import './styles.css'
import { Users } from '../../dummyData'
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
  const { Theme, selectedTheme, setSelectedTheme } = useContext(ThemeContext);

  return (

    <div className='leftbarrr' style={{ backgroundColor: Theme.main, color: Theme.secendary }} >

      <div className="leftbarWrapperr">


        <ul className="leftbarListt">



          <li className="leftbarListItemm">
            <FeedIcon className="sidebarIcon" />
            <span className="leftbarListItemTextt">Feed</span>
          </li>

          <li className="leftbarListItemm">
            <ChatIcon className="sidebarIcon" />
            <span className="leftbarListItemTextt">Chat</span>
          </li>

          <li className="leftbarListItemm">
            <PlayCircleIcon className="sidebarIcon" />
            <span className="leftbarListItemTextt">Videos</span>
          </li>

          <li className="leftbarListItemm">
            <GroupIcon className="sidebarIcon" />
            <span className="leftbarListItemTextt">Groub</span>
          </li>

          <li className="leftbarListItemm">
            <BookmarkIcon className="sidebarIcon" />
            <span className="leftbarListItemTextt">Bookmarks</span>
          </li>

          <li className="leftbarListItemm">
            <ContactSupportIcon className="sidebarIcon" />
            <span className="leftbarListItemTextt">Questions</span>
          </li>

          <li className="leftbarListItemm">
            <WorkIcon className="sidebarIcon" />
            <span className="leftbarListItemTextt">Jops</span>
          </li>

          <li className="leftbarListItemm">
            <EventIcon className="sidebarIcon" />
            <span className="leftbarListItemTextt">Event</span>
          </li>

          <li className="leftbarListItemm">
            <GamesIcon className="sidebarIcon" />
            <span className="leftbarListItemTextt">Courses</span>
          </li>

        </ul>

      </div>

    </div>
  )
}
