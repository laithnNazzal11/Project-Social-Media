import React from 'react'
import './styles.css'
import OnlineFreind from '../Rigthbar/onlineFreinds'
import {Users} from '../../dummyData'

export default function index({profile}) {
  const HomeRigthbar = () => {
    return (
      <div className='home'>
              <div className='birthdayContainer'>
          <img className='birthdayImg' src="/assest/gift.png" alt=""/>
          <span className='birthdayText'>
            <b>Pola Foster</b> and <b>3 other frinds</b> have a birthday today
            </span>

        </div>
        <img className='rigthbarAd' src="/assest/ad.png" alt=""/>
        <h4 className='rigthbarTitle'>Online Freinds</h4>
        <ul className='rightbarFreindList'>

          {Users.map((u)=> (
          <OnlineFreind key={u.id} user={u}/>

            ))}

        </ul>
      </div>
    )
  }

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
    
    <div className='rigthbar'>
      <div className='rigthbarWrapper'>
        {profile ? <ProfileRigthbar/> : <HomeRigthbar/> }

      </div>
    </div>


    </>
  )
}
