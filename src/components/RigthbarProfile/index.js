import React from 'react'
import './styles.css'
import OnlineFreind from '../Rigthbar/onlineFreinds'
import {Users} from '../../dummyData'

export default function index() {
  const rightbarInfo = [
    { key: 'City:', value: 'New York' },
    { key: 'From:', value: 'Madrid' },
    { key: 'Relationship:', value: 'Single' }
  ];

  const rightbarInfoItems = rightbarInfo.map((info, index) => (
    <div className='rightbarInfoItem' key={index}>
      <span className='rightbarInfoKey'>{info.key}</span>
      <span className='rightbarInfoValue'>{info.value}</span>
    </div>
  ));
  

  const userFriends = [
    { imgSrc: '/assest/person/1.jpeg', name: 'John Center' },
    { imgSrc: '/assest/person/2.jpeg', name: 'laith nazzal' },
    { imgSrc: '/assest/person/3.jpeg', name: 'ahmad nazzal' },
    { imgSrc: '/assest/person/4.jpeg', name: 'rami salaman' },
    { imgSrc: '/assest/person/5.jpeg', name: 'layan' },
    { imgSrc: '/assest/person/6.jpeg', name: 'obada mohmmad' },
    { imgSrc: '/assest/person/7.jpeg', name: 'rasheed kheder' },
    { imgSrc: '/assest/person/8.jpeg', name: 'hamada ahmad' }
  ];

  const userFriendsList = userFriends.map((friend, index) => (
    <div className='rigthbarFollowing' key={index}>
      <img className='rigthbarFollowingImg' alt='' src={friend.imgSrc}></img>
      <span className='rigthbarFollowingName'>{friend.name}</span>
    </div>
  ));

  const ProfileRigthbar = () => {
    return (
      <>
      <h4 className='rigthbarTitle'>User information</h4>
      <div className='rightbarInfo'>
         {rightbarInfoItems}
       <h4 className='rigthbarTitle'>User Friends</h4>
        <div className='rgihtbarFollowings'>
         {userFriendsList}
        </div>
      </div>
      
        
   
   </>
  )}


  return (
    <>
    
    <div className='rigthbarr'>
      <div className='rigthbarWrapper'>
        <ProfileRigthbar/> 

      </div>
    </div>


    </>
  )
}
