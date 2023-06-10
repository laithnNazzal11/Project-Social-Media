import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import LogIn from './pages/login';
import Register from './pages/register';
import Profile from './pages/Profile'
import Chat from "./pages/Chat"
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import Notifications from './pages/Notifications'
import { ProfilePictureProvider } from './pages/Profile/ProfilePictureContext'
import { useState,useEffect } from 'react';
import ProfilePictureContext from '../src/pages/Profile/ProfilePictureContext';
import useLocalStorage from 'use-local-storage'
import DarkModeButton from './components/DarkModeButton'
import { ThemeContextProvider } from './ThemeContext';



import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Guard, { LoginGuard } from "./Gurd";
import { AlertContextProvider } from './components/AlertProvider';
import SuccessAlert from './components/SuccessAlert';



function App() {
  const [profilePicture, setProfilePicture] = useState('');

  const [backgroundColor, setBackgroundColor] = useState('white');
  const handleButtonClick = () => {
    // Change the background color based on the current color
    setBackgroundColor(backgroundColor === 'white' ? 'black' : 'white');
  };
  
  return (
    <ProfilePictureProvider>
    <ThemeContextProvider>
      <AlertContextProvider>

      
      <SuccessAlert/>
      <Router >


        <Routes>

          
 
          <Route path="/home" element={<Guard><Home/></Guard>} />
          <Route path="/chat" element={<Guard><Chat/></Guard>} />
          <Route path="/profile" element={<Guard><Profile/></Guard>} />
          <Route path="/notifications" element={<Guard><Notifications/></Guard>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/" element={<LoginGuard><LogIn/></LoginGuard>} />
        </Routes>

    </Router>
    
    </AlertContextProvider>
        </ThemeContextProvider>
        </ProfilePictureProvider>
  );
}

export default App;
