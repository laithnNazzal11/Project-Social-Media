import React, { useContext, useState } from 'react';
import './styles.css';
import Topbar from '../../components/topbar';
import Leftbar from '../../components/Leftbar';
import Feed from '../../components/feed';
import RigthbarHomePage from '../../components/Rigthbar';
import ProfilePictureContext from '../Profile/ProfilePictureContext';
import { profilePicture } from '../Profile/index'
import useLocalStorage from 'use-local-storage'
import { successMessage } from '../login'


export default function Index({ successMessage }) {
  // Create a state to hold the profile picture URL



  // Function to handle profile picture change


  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }


  return (
    <>
      {successMessage && <p>{successMessage}</p>}

      <Topbar />
      <div className="homeContainer">
        <Leftbar />
        <Feed />
        <RigthbarHomePage />
      </div>
    </>
  );
}
