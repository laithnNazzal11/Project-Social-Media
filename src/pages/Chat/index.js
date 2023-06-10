import React from 'react';
import './style.css'
import Topbar from "../../components/topbar"
import Closefreind from "../../components/RigthbarProfile/onlineFreinds"
import { Users } from '../../dummyData'
import { useNavigate } from "react-router-dom";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
import { useState,useEffect,useContext } from 'react';
import ThemeContext from '../../ThemeContext';


import ProfilePictureContext from '../Profile/ProfilePictureContext'

export default function Index() {
  const navigate = useNavigate();

  const handleUserClick = (u) => {
    console.log("laith")
    navigate("/chat/laith");
    // Extract the necessary information from the user object
    const { photo, name } = u;
    // Display the photo and name on the website
    console.log('Close friend:', name);
    console.log('Photo:', photo);
  };

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const firestore = firebase.firestore();

  const sendMessage = () => {
    const newMessage = { text: message, timestamp: Date.now() };
  
    firestore
      .collection('messages')
      .add(newMessage)
      .then((docRef) => {
        console.log('Message saved successfully');
        // Update the messages state by including the new message with its generated ID
        setMessages([...messages, { id: docRef.id, ...newMessage }]);
        setMessage('');
      })
      .catch((error) => {
        console.error('Error saving message:', error);
      });
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const snapshot = await firestore.collection('messages').orderBy('timestamp').get();
        const fetchedMessages = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setMessages(fetchedMessages);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
  
    fetchMessages();
  }, []);

const deleteMessage = (messageId) => {
  firestore
    .collection('messages')
    .doc(messageId)
    .delete()
    .then(() => {
      console.log('Message deleted successfully');
      // Update the messages state by filtering out the deleted message
      setMessages(messages.filter((msg) => msg.id !== messageId));
    })
    .catch((error) => {
      console.error('Error deleting message:', error);
    });
};
const profilePictureContext = useContext(ProfilePictureContext);
const {Theme,selectedTheme,setSelectedTheme} = useContext(ThemeContext);

  return (
    <>
      <Topbar />
      <div className="messenger" style={{backgroundColor:Theme.main,color:Theme.secendary}}>
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput"  style={{backgroundColor:Theme.main,color:Theme.secendary}}/>
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <>
              <div className="chatBoxTop">
                <div>
                  <div className='rigthbarFollowingg'>
                    <img className='rigthbarFollowingImgg' alt='' src='/assest/person/6.jpeg'></img>
                    <span className='rigthbarFollowingName'>Ahmad Nazzal</span>
                  </div>

                  {messages.map((msg, index) => (
                    <div class="massage" key={msg.id}>
                      <div className='imgp'>
                      <img className='shareProfileImg' src={profilePictureContext.profilePicture} alt="" />
                      <p key={index} style={{backgroundColor:Theme.third}}>{msg.text}</p>
                      </div>
                      <div> 
                      <button className="deleteButton" onClick={() => deleteMessage(msg.id) } style={{backgroundColor:Theme.third}}>
                        Delete
                     </button>
                     </div>
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
                  style={{backgroundColor:Theme.main,color:Theme.secendary}}
                ></textarea>
                <button className="chatSubmitButton" onClick={sendMessage} style={{backgroundColor:Theme.third}}>
                  Send
                </button>

              </div>
            </>
            <span className="noConversationText"></span>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ul className="leftbatFriendList" style={{borderColor:Theme.main,color:Theme.secendary}}>
              {Users.map((u) => (
                <Closefreind onClick={() => handleUserClick(u)} key={u.id} user={u} style={{borderColor:Theme.main,color:Theme.secendary}}/>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </>
  )
}