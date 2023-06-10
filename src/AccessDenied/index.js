import { useNavigate } from "react-router-dom";
import Login from '../pages/login'

function AccessDenied() {
  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate("/");
  };



  return (
    <Login />

  );
}

export default AccessDenied;