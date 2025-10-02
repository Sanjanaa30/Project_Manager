import React from "react";
import { Outlet } from "react-router";
 
const auth_layout = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center gap-4">
        <Outlet />
    </div>
  )
}

export default auth_layout