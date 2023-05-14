import React from 'react'
import './styles.css'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import LabelIcon from '@mui/icons-material/Label';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
export default function index() {
  return (
    <div className='share'>
      <div className='shareWrapper'>
        <div className='shareTop'>
          <img className='shareProfileImg' src="/assest/person/1.jpeg" alt="" /> 
            <input 
            placeholder="What's in your mind ?"  
            className='shareInput'
            />
        </div>
        <hr className='shareHr'/>
        <div className='shareButtom'>
            <div className='shareOptions'>
                <div className='shareOption'>
                    <AddPhotoAlternateIcon htmlColor='tomato' className='shareIcon'/>
                   <span className='shareOptionText'>photo/veido</span> 
                </div>
                <div className='shareOption'>
                    <LabelIcon  htmlColor='blue' className='shareIcon'/>
                   <span className='shareOptionText'>Tag</span> 
                </div>     
                <div className='shareOption'>
                    <AddLocationAltIcon  htmlColor='green' className='shareIcon'/>
                   <span className='shareOptionText'>Location</span> 
                </div>
                <div className='shareOption'>
                    <EmojiEmotionsIcon  htmlColor='goldenrood' className='shareIcon'/>
                   <span className='shareOptionText'>Feelings</span> 
                </div>           
            </div>
            <button className='shareButton'>Share</button>
        </div>
      </div>
    </div>
  )
}
