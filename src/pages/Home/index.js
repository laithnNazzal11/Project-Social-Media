import React from 'react'
import './styles.css'
import Topbar from '../../components/topbar'
import Leftbar from '../../components/Leftbar'
import Feed from '../../components/feed'
import Rigthbar from '../../components/Rigthbar'

export default function index() {
  return (
    <div>
      <Topbar/>
      <div className="homeContainer">
        <Leftbar/>
        <Feed/>
        <Rigthbar/>

      </div>
      
    </div>
  )
}
