import React, { createContext, useState } from 'react';

const ProfilePictureContext = createContext('');

export const ProfilePictureProvider = ({ children }) => {
  const [profilePicture, setProfilePicture] = useState('https://firebasestorage.googleapis.com/v0/b/social-media-e83e5.appspot.com/o/1686303262341_3.png?alt=media&token=c10fe34e-a566-424e-9cbb-aa46185a0f6d');

  return (
    <ProfilePictureContext.Provider value={{ profilePicture: profilePicture, setProfilePicture: setProfilePicture }}>
      {children}
    </ProfilePictureContext.Provider>
  );
};

export default ProfilePictureContext;