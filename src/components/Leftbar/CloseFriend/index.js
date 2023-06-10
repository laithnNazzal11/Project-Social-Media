import React from 'react'
import './styles.css'


export default function index({ user }) {
  return (
    <li className="leftbarFriend">
      <img className="leftbarFriendImage" src={user.profilePicture} alt="" />
      <span className="leftbarFriendName">{user.username}</span>
    </li>

  )
}
