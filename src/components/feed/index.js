import React, { useContext } from 'react'
import ProfilePictureContext from '../../pages/Profile/ProfilePictureContext';
import './styles.css'
import Share from '../Share'
import Post from '../post'
import { useState } from 'react';
import { useEffect } from 'react';
import { dataRef } from '../../firebase-config';
import "firebase/compat/firestore";
import Story from "../../components/Story"
import ThemeContext from '../../ThemeContext';




export default function Index() {



  const [allValue, setAllValue] = useState([])

  const [post, setPost] = useState("");



  useEffect(() => {
    dataRef.ref().child("all").on("value", data => {
      const getData = Object.values(data.val())
      setAllValue(getData)
    })
  }, [])

  console.log(allValue)


  const profilePicture = useContext(ProfilePictureContext);

  const { Theme, selectedTheme, setSelectedTheme } = useContext(ThemeContext);




  return (

    <div className='feed' style={{ backgroundColor: Theme.main, color: Theme.secendary }}>
      <div className='feedWrapper'>

        <Share />


        {allValue.map((p) => (
          <>

            <Post key={p.id} post={p} />
          </>

        ))}





      </div>
    </div>

  )
}
