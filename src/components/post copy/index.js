import React from 'react'
import './styles.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../dummyData'
import { useState } from 'react';

export default function Index({ post }) {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLike] = useState(false)

  const likeHandler = () => {

    setLike(isLiked ? like - 1 : like + 1)
    setIsLike(!isLiked)



  }


  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img className='postProfileImage' src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt="" />
            <span className='postUserName'>{Users.filter(u => u.id === post.userId)[0].username}</span>
            <span className='postDate'>{post.date}</span>


          </div>
          <div className='postTopRigth'>
            <MoreVertIcon />

          </div>


        </div>
        <div className='postCenter'>
          <span className='postText'>{post?.desc}</span>
          <img className='postImage' src={post.photo} alt="" />
        </div>
        <div className='postDown'>
          <div className='postBottomLeft'>
            <img className='likeIcon' src="/assest/like.png" onClick={likeHandler} alt="" />
            <img className='likeIcon' src="/assest/heart.png" onClick={likeHandler} alt="" />
            <span className='postLikeCounter'>{like} People like it</span>

          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>{post.comment} Comments</span>
          </div>

        </div>

      </div>

    </div>
  )
}
