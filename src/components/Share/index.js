import React from 'react'
import './styles.css'
import { useState } from 'react';
import { useEffect } from 'react';
import {dataRef} from '../../firebase-config';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import LabelIcon from '@mui/icons-material/Label';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import {useForm} from "react-hook-form";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
import {storage} from "../../firebase-config";
import {ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage"
import {v4} from "uuid"


export default function Index() {


    const handleImage=(e)=> {
      console.log(e.target.file)
      setImage(e.target.files)
    }
    
   const[image,setImage] = useState('')
   const[imageList,setImageList] = useState([])
   const imageListRef = ref(storage,"images/")

    
   const upPost = () => {
    if (image === null) return;
    const imageRef = ref(storage, `images/${image.name + v4()}`);
    uploadBytes(imageRef, image)
      .then((snapshot) => getDownloadURL(snapshot.ref))
      .then((url) => {
        const newKey = "desc";
        const newData = {
          [newKey]: post,
          "like": 0,
          "comment": 0,
          "date": "0 min ago",
          "photo": url,
          "username": "Laith Nazzal",
          "profilePicture": "assest/person/11.png"
        };
        dataRef.ref().child("all").child(counter).set(newData);
        setCounter(counter + 1);
        setPost("");
      });
  };
    useEffect(() => {
      listAll(imageListRef).then((response) => Promise.all(response.items.map((item) =>
       getDownloadURL(item)))).then((urls) =>
        setImageList(urls));
    }, []);



 
  
  const db = firebase.firestore().collection("dev")
  console.log(db);
  const[data,setData] = useState([])
  const[loader, setLoader] = useState(true)
  
  ////////////// use another way ///////////////////////
  /*
  const lb = firebase.firestore()
  const[contact, setContact] = useState({name: "", phone: ""})
  const handleChange =(event)=>{
    event.preventDefault();
    const{name, value} = event.target;
    setContact((prev)=> {
      return{...prev,[name] : value}
    })
  }
  
  // to uplaode inptu to firebase // 
  const addDoc =(event)=> {
    event.preventDefault();
    lb.collection("contacts").add({
      name : contact.name,
      phone: contact.phone
    }) .then((docRef)=>{
      const docId = docRef.id;
      console.log(docId)


    }) .catch((err)=> {
      console.log("error" + err.message)

    })



  }
   
  ////////////////////////////////////

  const getData =()=> {
    db.onSnapshot((QuerySnapshot)=> {
      const item =[]
      QuerySnapshot.forEach(doc => {
        item.push(doc.data())
      });

      setData(item)
      console.log(data)
      console.log(item)
    })
  }

  useEffect(()=>{
    getData()
  },[]) 
*/

  
  const [post, setPost] = useState("");
  const [allValue,setAllValue] = useState([])
  const [counter,setCounter] = useState(3);
   

  const handleChange = () => {
    if (post !== "") {
      
      const newKey = "desc";
      const newData = {
        [newKey]: post,
        "like":0,
        "comment":0,
        "date":"0 min ago",
        "photo":"",
        "username":"Laith Nazzal",
        "profilePicture":"assest/person/1.jpeg"

      };
      dataRef.ref().child("all").child(counter).set(newData);
      setCounter(counter + 1);
      setPost("");
      console.log(post);
    }
  };

  useEffect(()=>{
    dataRef.ref().child("all").on("value",data=>{
      const getData=Object.values(data.val())
      setAllValue(getData)
    })
  },[])
  
  console.log(allValue)
    


  
  return (
    <>
    
    <div className='share'>

      <div className='shareWrapper'>
        <div className='shareTop'>
 
          <img className='shareProfileImg' src="/assest/person/11.png" alt="" /> 
            <input 
            value={post} onChange={(e)=>{setPost(e.target.value)}}
            placeholder="What's in your mind ?"  
            className='shareInput'
            />
            
        </div>
        <hr className='shareHr'/>
        <div className='shareButtom'>
            <div className='shareOptions'>
                <div className='shareOption'>
                    <AddPhotoAlternateIcon htmlColor='tomato' className='shareIcon'  />
                   <span className='shareOptionText' >photo/veido</span> 
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
            
            <button className='shareButton' onClick={upPost}  >Share</button>
        </div>
        <input type='file' onChange={(event)=>{setImage(event.target.files[0])}} />
      </div>

    </div>
    </>
  )
}


