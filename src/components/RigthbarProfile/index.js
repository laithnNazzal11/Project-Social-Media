import React from 'react'
import './styles.css'
import OnlineFreind from '../Rigthbar/onlineFreinds'
import {Users} from '../../dummyData'

export default function index({profile}) {
 

  const ProfileRigthbar = () => {
    return (
      <>
      <h4 className='rigthbarTitle'>User information</h4>
      <div className='rightbarInfo'>

        <div className='rightbarInfoItem'>
          <span className='rightbarInfoKey'>City:</span>
          <span className='rightbarInfoValue'>New York</span>
        </div>

        <div className='rightbarInfoItem'>
          <span className='rightbarInfoKey'>From:</span>
          <span className='rightbarInfoValue'>Madrid</span>
        </div>

        <div className='rightbarInfoItem'>
          <span className='rightbarInfoKey'>Relationship:</span>
          <span className='rightbarInfoValue'>Single</span>
        </div>
      </div>
      <h4 className='rigthbarTitle'>User Freinds</h4>
      
      <div className='rgihtbarFollowings'>
        <div className='rigthbarFollowing'>
          <img className='rigthbarFollowingImg' atl="" src="/assest/person/1.jpeg"></img>
          <span className='rigthbarFollowingName'>John Center</span>
        </div>
        
        <div className='rigthbarFollowing'>
          <img className='rigthbarFollowingImg' atl="" src="/assest/person/2.jpeg"></img>
          <span className='rigthbarFollowingName'>John Center</span>
        </div>

        <div className='rigthbarFollowing'>
          <img className='rigthbarFollowingImg' atl="" src="/assest/person/3.jpeg"></img>
          <span className='rigthbarFollowingName'>John Center</span>
        </div>

        <div className='rigthbarFollowing'>
          <img className='rigthbarFollowingImg' atl="" src="/assest/person/4.jpeg"></img>
          <span className='rigthbarFollowingName'>John Center</span>
        </div>
        <div className='rigthbarFollowing'>
          <img className='rigthbarFollowingImg' atl="" src="/assest/person/5.jpeg"></img>
          <span className='rigthbarFollowingName'>John Center</span>
        </div>
        <div className='rigthbarFollowing'>
          <img className='rigthbarFollowingImg' atl="" src="/assest/person/6.jpeg"></img>
          <span className='rigthbarFollowingName'>John Center</span>
        </div>
        <div className='rigthbarFollowing'>
          <img className='rigthbarFollowingImg' atl="" src="/assest/person/7.jpeg"></img>
          <span className='rigthbarFollowingName'>John Center</span>
        </div>
                <div className='rigthbarFollowing'>
          <img className='rigthbarFollowingImg' atl="" src="/assest/person/8.jpeg"></img>
          <span className='rigthbarFollowingName'>John Center</span>
        </div>
      </div>

      </>
    )
  }


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
