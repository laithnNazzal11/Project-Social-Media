import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import LogIn from './pages/login';
import Register from './pages/register';
import Profile from './pages/Profile'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<LogIn/>}/>



      </Routes>
    </Router>
    </>
  );
}

export default App;
