import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuth } from "../context/AuthContext";

interface ProtectedRouteProps {
  children: ReactNode;
  role?: "admin" | "manager" | "employee";
}


const ProtectedRoute = ({ children, role }: ProtectedRouteProps) => {
  const { user } = useAuth();


  if (!user) {
    return <Navigate to="/login" replace />;
  }


  if (role && user.role !== role) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
