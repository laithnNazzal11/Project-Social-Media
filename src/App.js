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
import Guard, { LoginGuard } from "./Gurd";


function App() {



  return (
    <>
    <Router>
      <Routes>
        <Route path="/home" element={
        // <Guard>

         <Home/>
       // </Guard>

        }
        />
        <Route path="/profile" element={
         // <Guard>

        <Profile/>
       // </Guard>

        }
        />
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={
          <LoginGuard>
             <LogIn/>
          </LoginGuard>

      }
        />



      </Routes>
    </Router>
    </>
  );
}

export default App;
