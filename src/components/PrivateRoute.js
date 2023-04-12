import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/auth";

const PrivateRoute = (props) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Route {...props} />;
};

export default PrivateRoute;
