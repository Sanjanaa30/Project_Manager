import { useAuth } from "@/provider/auth-context";
import React from "react";
import { Navigate, Outlet } from "react-router";
 
const auth_layout = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  
  return (
    <div className="w-full h-screen flex items-center justify-center gap-4">
        <Outlet />
    </div>
  )
}

export default auth_layout