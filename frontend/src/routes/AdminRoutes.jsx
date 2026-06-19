import React from "react";
import { Navigate } from "react-router-dom";

const AdminRoutes = ({ children }) => {
  const Token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!Token) {
    return <Navigate to="/login" replace />;
  }

  if (role !== "admin") {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default AdminRoutes;
