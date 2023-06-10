import React, { useContext } from 'react'
import './styles.css'
import Share from '../Share'
import ShareProfile from '../ShareProfile'
import ProfilePictureContext from '../../pages/Profile/ProfilePictureContext';
import Post from '../post'
import { Posts } from '../../dummyData'
import { useState } from 'react';
import { useEffect } from 'react';
import { dataRef } from '../../firebase-config';
import "firebase/compat/firestore";
import Story from "../Story"
import ThemeContext from '../../ThemeContext';

export default function Index() {


  const [userValue, setUserValue] = useState([])

  const [post, setPost] = useState("");

  const handleChange = () => {
    if (post !== "") {
      dataRef.ref().child("alll").push(post)
      setPost("");

      console.log(post);

    }

  }

  useEffect(() => {
    dataRef.ref().child("alll").on("value", data => {
      const getData = Object.values(data.val())
      setUserValue(getData)
    })
  }, [])

  console.log(userValue)

  const profilePicture = useContext(ProfilePictureContext);


  const { Theme, selectedTheme, setSelectedTheme } = useContext(ThemeContext);

  return (

    <div className='feedd' style={{ backgroundColor: Theme.main, color: Theme.secendary }}>
      <div className='feedWrapper'>


        <ShareProfile />


        {userValue.map((p) => (
          <>

            <Post key={p.id} post={p} />
          </>

        ))}





      </div>
    </div>

  )
}
