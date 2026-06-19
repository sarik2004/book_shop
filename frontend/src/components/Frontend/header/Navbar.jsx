import React, { useEffect, useState } from "react";
import { BiBookReader } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const hideAuthLinks = ["/login", "/register"].includes(location.pathname);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <div  className=" rounded-b-[10px] fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 ">
      {/* HEADER */}
      <header className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-sky-500 text-3xl text-white shadow-lg shadow-sky-500/20">
            <BiBookReader />
          </div>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
            Book Shop
          </p>
        </div>

        {/* NAV */}
        <nav >
          <ul className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "rounded-full px-4 py-2 bg-sky-500 text-white"
                    : "rounded-full px-4 py-2 hover:bg-slate-700 hover:text-white"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? "rounded-full px-4 py-2 bg-sky-500 text-white"
                    : "rounded-full px-4 py-2 hover:bg-slate-700 hover:text-white"
                }
              >
                Product
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "rounded-full px-4 py-2 bg-sky-500 text-white"
                    : "rounded-full px-4 py-2 hover:bg-slate-700 hover:text-white"
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "rounded-full px-4 py-2 bg-sky-500 text-white"
                    : "rounded-full px-4 py-2 hover:bg-slate-700 hover:text-white"
                }
              >
                Contact
              </NavLink>
            </li>

            {/* SEARCH */}
            <li className="ml-auto">
              <div className="relative w-full max-w-xs">
                <IoSearch className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search book..."
                  className="w-full rounded-full border border-slate-700 bg-slate-900/90 pl-12 pr-4 py-2 text-sm text-slate-100 outline-none focus:border-sky-400"
                />
              </div>
            </li>

            {/* ICONS */}
            <li>
              <div className="flex items-center gap-3">
                <Link
                  to="/carts"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/80 text-sky-400 hover:bg-slate-800"
                >
                  <FaShoppingCart className="h-5 w-5" />
                </Link>

                {/* PROFILE */}
                <div className="relative">
                  <button
                    onClick={() => setOpen(!open)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/80 text-emerald-400 hover:bg-slate-800"
                  >
                    <IoMdPerson className="h-5 w-5" />
                  </button>

                  {open && !hideAuthLinks && (
                    <div className="absolute right-0 mt-2 w-44 rounded-2xl bg-slate-950 border border-slate-700">
                      <Link
                        to="/login"
                        className="block px-4 py-3 hover:bg-slate-900"
                      >
                        Login
                      </Link>
                      <Link
                        to="/register"
                        className="block px-4 py-3 hover:bg-slate-900"
                      >
                        Register
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
