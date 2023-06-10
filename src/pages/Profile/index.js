import React, { useState, useEffect, createContext, useContext } from 'react';
import './styles.css';
import Topbar from '../../components/topbar';
import Leftbar from '../../components/Leftbar';
import Feed from '../../components/feed';
import RigthbarProfile from '../../components/RigthbarProfile';
import FeedProfile from '../../components/feedProfile';
import { db } from '../../firebase-config';
import firebase from 'firebase/compat/app';
import ProfilePictureContext from './ProfilePictureContext';
import ThemeContext from '../../ThemeContext';
import AlertContext from '../../components/AlertProvider';

const storage = firebase.storage();

export default function Index() {
  const [profilePicture, setProfilePicture] = useState();

  useEffect(() => {
    const fetchProfilePicture = async () => {
      try {
        const profilePictureDoc = await db.collection('profile').doc('picture').get();
        if (profilePictureDoc.exists) {
          const data = profilePictureDoc.data();
          setProfilePicture(data.url);
        }
      } catch (error) {
        console.error('Error fetching profile picture:', error);
      }
    };

    fetchProfilePicture();
  }, []);
  const profilePictureContext = useContext(ProfilePictureContext);
  const handleProfilePictureChange = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.onchange = async (event) => {
      const file = event.target.files[0];
      const fileName = Date.now() + '_' + file.name;
      const storageRef = storage.ref().child(fileName);

      try {
        const snapshot = await storageRef.put(file);
        const downloadURL = await snapshot.ref.getDownloadURL();
        profilePictureContext.setProfilePicture(downloadURL);
        await db.collection('profile').doc('picture').set({ url: downloadURL });
        handleOpenSuccessAlert()

      } catch (error) {
        console.error('Error uploading profile picture:', error);
      }
    };
    fileInput.click();
  };


  const { Theme, selectedTheme, setSelectedTheme } = useContext(ThemeContext);
  const { handleOpenSuccessAlert } = useContext(AlertContext)

  return (
    <div>
      <Topbar />
      <div className="Profile" style={{ backgroundColor: Theme.main, color: Theme.secendary }}>
        <Leftbar />
        <div className="profileRight">
          <div className="profileRigthTop">
            <div className="profileCover">
              <img className="profileCoverImg" src="assest/post/3.jpeg" alt="" />
              {profilePicture ? (
                <img className="profileUserImg" src={profilePictureContext.profilePicture} alt="" />
              ) : (
                <div className="profileUserImg-placeholder">Profile Picture Placeholder</div>
              )}
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Laith Nazzal</h4>
              <span className="profileInfoDesc">Hello My Friends</span>
              <button className="changeProfilePictureButton"
                onClick={handleProfilePictureChange}
                style={{ backgroundColor: Theme.third }}
              >
                Change Profile Picture
              </button>
            </div>
          </div>
          <div className="profileRigthBottom">
            <FeedProfile />
            <RigthbarProfile />
          </div>
        </div>
      </div>
    </div>
  );
}