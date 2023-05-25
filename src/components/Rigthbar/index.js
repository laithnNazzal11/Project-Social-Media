import React from 'react'
import './styles.css'
import OnlineFreind from '../Rigthbar/onlineFreinds'
import {Users} from '../../dummyData'

export default function index() {
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

  return (
    <>
    
    <div className='rigthbar'>
      <div className='rigthbarWrapper'>
        {<HomeRigthbar/>}

      </div>
    </div>


    </>
  )
}
