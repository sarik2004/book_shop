import React from "react";
import { FaUserCircle, FaBell, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login", { replace: true });
  };
  return (
    <div className="h-16 bg-slate-900 shadow-md flex justify-between items-center px-6 text-white">
      <h2 className="text-xl font-semibold">Dashboard</h2>

      <div className="flex items-center gap-3 text-lg text-slate-100">
        <button
          className="rounded-full p-2 hover:bg-slate-800 transition"
          type="button"
        >
          <FaBell />
        </button>
        <button
          className="rounded-full p-2 hover:bg-slate-800 transition"
          type="button"
        >
          <FaUserCircle />
        </button>
        <button
          onClick={handleLogout}
          className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-slate-700"
          type="button"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
