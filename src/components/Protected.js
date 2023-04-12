// Protected.js
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth";

const Protected = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return children;
};

export default Protected;
