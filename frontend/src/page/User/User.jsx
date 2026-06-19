import React, { useState, useEffect } from "react";
import API from "../../Api/api";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState([]);
  const fetchUser = async () => {
    try {
      const res = await API.get("auth/users");
      console.log(res.data);
      setUser(res.data.data || res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div className=" rounded-[10px] min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2">
            📋 User Management
          </p>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
            All Registered Customers
          </h2>
          <p className="text-slate-400 text-sm">
            View and manage all customer accounts registered in the system
          </p>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto rounded-xl border border-slate-700 bg-slate-900/50 shadow-2xl backdrop-blur">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-800/80 border-b border-slate-700">
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-300">
                  ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Name
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Email
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Password
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              {user.length > 0 ? (
                user.map((items) => (
                  <tr
                    key={items.id}
                    className="hover:bg-slate-800/30 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-slate-200">
                      {items.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-300">
                      {items.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-300">
                      {items.email}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-400">
                      <span className="font-mono text-xs bg-slate-800/50 px-2 py-1 rounded">
                        ••••••••
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="px-6 py-8 text-center text-slate-400"
                  >
                    <p className="text-sm">No users found</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer Stats */}
        <div className="mt-6 flex justify-end">
          <div className="text-sm text-slate-400">
            Total Users:{" "}
            <span className="font-semibold text-cyan-400">{user.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
