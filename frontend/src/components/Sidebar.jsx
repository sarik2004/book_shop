import React from "react";
import { FaHome, FaTag } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MdShoppingBag } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";

const Sidebar = () => {
  const menu = [
    { title: "Dashboard", path: "/dashboard", icon: <FaHome /> },
    { title: "Categories", path: "/dashboard/category", icon: <FaTag /> },
    { title: "Book", path: "/dashboard/book", icon: <IoBookSharp /> },
    { title: "User", path: "/dashboard/users", icon: <FaUserAlt /> },
    { title: "Order", path: "/dashboard/orders", icon: <MdShoppingBag /> },
  ];

  return (
    <div className="w-64 min-h-screen bg-black text-white p-5">
      <h2 className="text-2xl font-bold mb-8">Dashboard</h2>

      <ul className="space-y-4">
        {menu.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition ${
                  isActive ? "bg-blue-500" : "hover:bg-gray-700"
                }`
              }
            >
              {item.icon}
              <span>{item.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
