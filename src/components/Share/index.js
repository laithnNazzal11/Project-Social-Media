import React, { useContext }  from 'react'
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
import 'firebase/compat/storage';
import ProfilePictureContext from '../../pages/Profile/ProfilePictureContext';
import ThemeContext from '../../ThemeContext';


export default function Index() {


    
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
          "profilePicture": profilePictureContext.profilePicture
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
  const [post, setPost] = useState("");
  const [allValue,setAllValue] = useState([])
  const [counter,setCounter] = useState(3);
  useEffect(()=>{
    dataRef.ref().child("all").on("value",data=>{
      const getData=Object.values(data.val())
      setAllValue(getData)
    })
  },[])
  
  console.log(allValue)
    

  const shareOptions = [
    { icon: <AddPhotoAlternateIcon htmlColor='tomato' className='shareIcon' />, text:<input className="custom-file-input" type='file' name="photo/video" onChange={(event)=>{setImage(event.target.files[0])}} />},
    { icon: <LabelIcon htmlColor='blue' className='shareIcon' />, text: 'Tag' },
    { icon: <AddLocationAltIcon htmlColor='green' className='shareIcon' />, text: 'Location' },
    { icon: <EmojiEmotionsIcon htmlColor='goldenrood' className='shareIcon' />, text: 'Feelings' }
  ];
  
  const shareOptionList = shareOptions.map((option, index) => (
    <div className='optionShare'>
    <div className='shareOption' key={index}>
      {option.icon}
      <span className='shareOptionText'>{option.text}</span>
    </div>
    </div>
  ));
  const profilePictureContext = useContext(ProfilePictureContext);
  const {Theme,selectedTheme,setSelectedTheme} = useContext(ThemeContext);

  return (

    
    <div className='share' style={{backgroundColor:Theme.third,color:Theme.secendary}}>

      <div className='shareWrapper'>
        <div className='shareTop'>
 
          <img className='shareProfileImg'  alt="" src={profilePictureContext.profilePicture}/> 
            <input 
            value={post} onChange={(e)=>{setPost(e.target.value)}}
            placeholder="What's in your mind ?"  
            className='shareInput'
            style={{backgroundColor:Theme.third,color:Theme.secendary}}
            />
            
        </div>
        <hr className='shareHr'/>
        <div className='shareButtom'>
            <div className='shareOptions'>
             {shareOptionList}
            </div>
            
            <button className='shareButton' onClick={upPost}  >Share</button>
        </div>
      </div>

    </div>

  )
}


