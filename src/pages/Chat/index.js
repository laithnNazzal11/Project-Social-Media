import React, { useState } from 'react';
import './style.css'
import Topbar from "../../components/topbar"
import Closefreind from "../../components/RigthbarProfile/onlineFreinds"
import {Users} from '../../dummyData'
import { useNavigate } from "react-router-dom";



export default function Index() {
  

  const navigate = useNavigate();

  const handleUserClick = (u) => {
    navigate(`/chat/${u}`);
  };

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);


  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    const newMessage = { text: message, timestamp: Date.now() };
    setMessages([...messages, newMessage]);

    console.log('Message:', message);
    setMessage('');
  };
  
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
                <div>

                 <div className='rigthbarFollowing'>
                   <img className='rigthbarFollowingImg' alt='' src='/assest/person/6.jpeg'></img>
                   <span className='rigthbarFollowingName'>Ahmad Nazzal</span>
                 </div>

                {messages.map((msg, index) => (
                 <div class="massage">
                 <img className='shareProfileImg' src="/assest/person/11.png" alt="" /> 
                 <p key={index}>{msg.text}</p>
                 </div>
                ))}
               </div>
                  
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    type="text"
                    value={message}
                    onChange={handleMessageChange}

                  ></textarea>
                  <button className="chatSubmitButton" onClick={sendMessage}>
                    Send
                  </button>
                </div>
              </>
          
              <span className="noConversationText">
                
              </span>
          
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
          <ul className="leftbatFriendList">
        
          
         {Users.map((u)=> (
          <Closefreind key={u.id} user={u} onClick={() => handleUserClick(u)}/>

          ))}




      </ul>
          </div>
        </div>
      </div>
    </>
  )
}
