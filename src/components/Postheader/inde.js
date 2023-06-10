import React from 'react'
import './styles.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { post } from '../../dummyData'
import { dataRef } from '../../firebase-config';


export default function Index({ post }) {
  return (
    <div className='postTop'>
      <div className='postTopLeft'>

        <img className='postProfileImage' src={post.profilePicture} alt="" />
        <span className='postUserName'>{post.username}</span>
        <span className='postDate'>{post.date}</span>

      </div>
      <div className='postTopRigth'>
        <MoreVertIcon />


      </div>
    </div>

  )
}
