import React from 'react'
import './style.css'
import Topbar from "../../components/topbar"
import Closefreind from "../../components/RigthbarProfile/onlineFreinds"
import {Users} from '../../dummyData'

export default function Index() {
  return (
       <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />

          </div>
          
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
              <>
                <div className="chatBoxTop">
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."

                  ></textarea>
                  <button className="chatSubmitButton" >
                    Send
                  </button>
                </div>
              </>
          
              <span className="noConversationText">
                Open a conversation to start a chat.
              </span>
          
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
          <ul className="leftbatFriendList">
        
          
         {Users.map((u)=> (
          <Closefreind key={u.id} user={u}/>

          ))}


      </ul>
          </div>
        </div>
      </div>
    </>
  )
}
