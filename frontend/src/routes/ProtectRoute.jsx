import React from "react";
import { Navigate } from "react-router-dom";


const ProtectRoute = ({ children }) => {
  const Token = localStorage.getItem("token");
  
  if (!Token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectRoute;
