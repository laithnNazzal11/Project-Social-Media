import React, { useContext } from 'react'
import './styles.css'
import NovFriends from './novFriends'
import NotificationsIcon from '@mui/icons-material/Notifications';
import ThemeContext from '../../ThemeContext';


export default function Index({user}) {
  const {Theme,selectedTheme,setSelectedTheme} = useContext(ThemeContext);

  return (
    <div className='novitication' style={{backgroundColor:Theme.main,color:Theme.secendary}} >
      <div className='noviticationWrapper'>
        <div className='novTop'>
        <NotificationsIcon htmlColor='#1877f2' style={{color:Theme.eigth}} />
        <h2 className='novTitle' style={{color:Theme.eigth}} >Novitication</h2>


        </div>
        <div className='novs' style={{backgroundColor:Theme.third,color:Theme.secendary}}>
  
          <NovFriends />



 
        </div>

      </div>


    </div>

  )
}
