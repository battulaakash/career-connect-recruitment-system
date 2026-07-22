import { Navigate } from "react-router-dom";
import { getUser, getDashboardPath } from "../services/auth";

function RequireAuth({ children, requiredRole }) {
  const user = getUser();

  if (!user?.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to={getDashboardPath(user.role)} replace />;
  }

  return children;
}

export default RequireAuth;
