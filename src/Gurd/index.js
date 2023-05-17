import AccessDenied from "../AccessDenied";
import { Navigate } from "react-router-dom";

function Guard({ children }) {
  const token = localStorage.getItem("token");
  if (!token) return <AccessDenied />;
  return <>{children}</>;
}

export function LoginGuard({ children }) {
  const token = localStorage.getItem("token");
  if (token) return <Navigate to="/profile" />;
  return <>{children}</>;
}

export default Guard;