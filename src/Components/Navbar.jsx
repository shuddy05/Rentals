import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/reallogo.png";

const navLinks = [
  { label: "Home", path: "/home" },
  { label: "Properties", path: "/properties" },
  { label: "About Us",  },
  { label: "List Properties", path: "/detail-properties" },
  { label: "Contact Us", },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <nav className="layout flex items-center justify-between py-4">
        <Link to="/home" className="flex items-center gap-2">
          <img src={logo} alt="Estatery Logo" className="h-9 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ label, path }) => (
            <div key={path}>
              <Link
                to={path}
                className={`text-[16px] font-medium  ${
                  pathname === path
                    ? "text-[#7065F0] font-semibold border-b-2 border-[#7065F0] "
                    : "text-gray-500 "
                }`}
              >
                {label}
              </Link>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link to="/" className="text-[16px] font-semibold text-[#7065F0] ">
            Login
          </Link>
          <Link
            to="/register"
            className="text-[16px] font-semibold text-white bg-[#7065F0]  px-5 py-2.5 rounded-xl"
          >
            Sign up
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-9 h-9 cursor-pointer"
        >
          <span className={` w-6 h-0.5 bg-gray-700  ${menuOpen ? "" : ""}`} />
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={`text-[16px] font-medium py-2  ${
                pathname === path
                  ? "text-[#7065F0] font-semibold"
                  : "text-gray-500 hover:text-[#7065F0]"
              }`}
            >
              {label}
            </Link>
          ))}

          <div className="flex flex-col gap-3 pt-2 border-t border-gray-100">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-[16px] font-semibold text-[#7065F0] text-center py-2.5 border border-[#7065F0] rounded-xl "
            >
              Login
            </Link>
            <Link
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="text-[16px] font-semibold text-white bg-[#7065F0] text-center py-2.5 rounded-xl "
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
