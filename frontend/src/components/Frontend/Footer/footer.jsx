import React from "react";
import { FaBook, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" rounded-t-[10px] bg-slate-950 text-slate-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 text-white text-xl font-bold">
            <FaBook className="text-emerald-500" />
            Book Store
          </div>
          <p className="mt-3 text-sm text-slate-400">
            Discover your next favorite book. Read, learn, and grow with us.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-emerald-400">Home</a></li>
            <li><a href="/products" className="hover:text-emerald-400">Products</a></li>
            <li><a href="/carts" className="hover:text-emerald-400">Cart</a></li>
            <li><a href="/about" className="hover:text-emerald-400">About</a></li>
            <li><a href="/contact" className="hover:text-emerald-400">Contact</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-emerald-400">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-emerald-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-emerald-400">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800 text-center py-4 text-sm text-slate-500">
        © {new Date().getFullYear()} Book Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;