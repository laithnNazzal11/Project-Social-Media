import React from 'react'
import './styles.css'



export default function index({user}) {
  return (
    <li className='rightBarFriend'>
    <div className='rigthbarProfileImgContainer'>
      <img  className='rigthbarProfileImg'src={user.profilePicture} alt=""/>
      <span className='rigthbarOnline'></span>
    </div>
    <span className='rigthbarUserName'>{user.username}</span>
  </li>

  )
}
