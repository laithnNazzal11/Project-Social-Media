import React, { useContext } from 'react'
import './styles.css'
import { useState, useEffect } from 'react';
import { dataRef } from '../../firebase-config';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ProfilePictureContext from '../../pages/Profile/ProfilePictureContext';
import ThemeContext from '../../ThemeContext';
import AlertContext from '../AlertProvider';


export default function Index({ post }) {

  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLike] = useState(false)

  const likeHandler = () => {

    setLike(isLiked ? like - 1 : like + 1)
    setIsLike(!isLiked)
  }


  const [posts, setPosts] = useState("");
  const [allValue, setAllValue] = useState([])



  useEffect(() => {
    dataRef.ref().child("all").on("value", data => {
      const getData = Object.values(data.val())
      setAllValue(getData)
    })
  }, [])

  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleMessageChange = (e) => {
    setComment(e.target.value);
  };

  const CommentPost = () => {
    const newComment = { text: comment, timestamp: Date.now() };
    setComments([...comments, newComment]);
    handleOpenSuccessAlert()
    setComment('');
  };


  const profilePictureContext = useContext(ProfilePictureContext);

  const { Theme, selectedTheme, setSelectedTheme } = useContext(ThemeContext);
  const { handleOpenSuccessAlert } = useContext(AlertContext)

  return (


    <div className='post' style={{ backgroundColor: Theme.third, color: Theme.secendary }} >
      <div className='postWrapper'>
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
        <div className='postCenter'>
          <span className='postText'>{post.desc}</span>

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
            {allValue.comment}
          </div>



        </div>
        <div className='comment' style={{ backgroundColor: Theme.third, color: Theme.secendary }}>
          <img className='imgComment' src={profilePictureContext.profilePicture} />
          <input type="text" className='userComment' placeholder='Write an answer...'
            value={comment}
            onChange={handleMessageChange}
            style={{ backgroundColor: Theme.third, color: Theme.secendary }}
          />
          <button className='commentButton' onClick={CommentPost} style={{ backgroundColor: Theme.five }}>Comment</button>


        </div>
        <div className='theComments'>

          {comments.map((msg, index) => (
            <div class="comment">
              <img className='CommentProfileImg' src={profilePictureContext.profilePicture} alt="" />
              <p className='commentP' key={index} style={{ backgroundColor: Theme.four, color: Theme.secendary }}>{msg.text} </p>

            </div>
          ))}


        </div>

      </div>

    </div>

  )
}
