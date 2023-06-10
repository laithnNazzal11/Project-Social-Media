import React, { useContext } from 'react'
import './styles.css'
import ThemeContext from '../../../ThemeContext'



export default function Index({ user }) {
  const { Theme, selectedTheme, setSelectedTheme } = useContext(ThemeContext);

  return (
    <li className='rightBarFriend'>
      <div className='rigthbarProfileImgContainer'>
        <img className='rigthbarProfileImg' src={user.profilePicture} alt="" />
        <span className='rigthbarOnline' style={{ borderColor: Theme.main, color: Theme.secendary }}></span>
      </div>
      <span className='rigthbarUserName'>{user.username}</span>
    </li>

  )
}
