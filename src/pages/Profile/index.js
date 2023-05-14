import React from 'react'
import './styles.css'
import Topbar from '../../components/topbar'
import Leftbar from '../../components/Leftbar'
import Feed from '../../components/feed'
import RigthbarProfile from '../../components/RigthbarProfile'



export default function index() {
  return (
    <div>
      <Topbar/>
      <div className="Profile">
        <Leftbar/>
        <div className='profileRight'>

            <div className='profileRigthTop'>
                <div className='profileCover'>
                <img className='profileCoverImg' src="assest/post/3.jpeg" alt=""/>
                <img className='profileUserImg' src="assest/person/7.jpeg" alt=""/>

                </div>
                <div className='profileInfo'>
                    <h4 className='profileInfoName'>Laith Nazzal</h4>
                    <span className='profileInfoDesc'>Hello My Frineds</span>

                </div>


            </div>

            <div className='profileRigthBottom'>
            <Feed/>
            <RigthbarProfile/>
            </div>



        </div>



      </div>
      
    </div>
  )
}
