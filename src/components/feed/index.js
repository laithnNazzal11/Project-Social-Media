import React from 'react'
import './styles.css'
import Share from '../Share'
import Post from '../post'
import {Posts} from '../../dummyData'
import { useState } from 'react';
import { useEffect } from 'react';
import {dataRef } from '../../firebase-config';
import "firebase/compat/firestore";

import firebase from "firebase/compat/app";

import { QuerySnapshot } from 'firebase/firestore'

export default function Index() {
  
  /*
  const db = firebase.firestore().collection("dev")
  console.log(db);
  const[data,setData] = useState([])
  const[loader, setLoader] = useState(true)

  const getData =()=> {
    db.onSnapshot((QuerySnapshot)=> {
      const item =[]
      QuerySnapshot.forEach(doc => {
        item.push(doc.data())
      });
      setData(item)
      setLoader(false)
    })
  }

  useEffect(()=>{
    getData()
  },[]) 
  */

  const [allValue,setAllValue] = useState([])

  const [post, setPost] = useState("");
  
  const handleChange = ()=> {
   if(post!=="") {
      dataRef.ref().child("all").push(post)
      setPost("");
    
      console.log(post);
  
   }

  }

  useEffect(()=>{
    dataRef.ref().child("all").on("value",data=>{
      const getData=Object.values(data.val())
      setAllValue(getData)
    })
  },[])
  
  console.log(allValue)




  return (

    <div className='feed'>
      <div className='feedWrapper'>
        <Share/>
  

        {allValue.map((p) => (
          <>
  
          <Post key={p.id} post={p}/>
          </>
 
       ))}

        



      </div>
    </div>
  )
}
