import { useNavigate } from "react-router-dom";

function AccessDenied() {
  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate("/");
  };

  

  return (
    <div>
      Access Denied please login
      <button onClick={goToLoginPage}>Login</button>
    </div>
  );
}

export default AccessDenied;