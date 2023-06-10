import React, { useContext } from 'react'
import './styles.css'
import Topbar from '../../components/topbar'
import Leftbar from '../../components/Leftbar'
import Feed from '../../components/feed'
import RigthbarHomePage from '../../components/Rigthbar'
import Notifications from '../../components/Notifications'
import ProfilePictureContext from '../Profile/ProfilePictureContext'
import ThemeContext from '../../ThemeContext';

export default function Index() {
  const {Theme,selectedTheme,setSelectedTheme} = useContext(ThemeContext);

  return (

    <div className='allNovatication'  style={{backgroundColor:Theme.main,color:Theme.secendary}}>
         
      <Topbar/>
      <div className="Notifications">
        <Leftbar/>
        <Notifications/>
        
        <RigthbarHomePage/>

      
      
    </div>
    </div>

  )
}
