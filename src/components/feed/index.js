import React from 'react'
import './styles.css'
import Share from '../Share'
import Post from '../post'
import {Posts} from '../../dummyData'


export default function index() {
  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share/>
        {Posts.map((p) => (
          <Post key={p.id} post={p}/>
 
       ))}
        



      </div>
    </div>
  )
}
