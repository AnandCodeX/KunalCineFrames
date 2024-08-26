import React, { useState } from "react";
import { Link } from "react-scroll";

const Navebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full">
      {/* Navbar Container */}
      <div className="fixed top-0 left-0 w-full bg-black text-white z-50">
        <div className="flex justify-center text-2xl items-center px-6 py-4 md:py-5">
          {/* Uncomment and replace with your logo */}
          {/* <div className="flex items-center">
            <img src="logo.png" className="w-36" alt="Logo" />
          </div> */}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Navbar Links for Desktop */}
          <ul className="hidden md:flex md:gap-10 list-none">
            <li>
              <Link
                activeClass="text-blue-500"
                to="Main"
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer p-2 hover:text-blue-500"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                activeClass="text-blue-500"
                to="About"
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer p-2 hover:text-blue-500"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                activeClass="text-blue-500"
                to="Contactus"
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer p-2 hover:text-blue-500"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <div className="flex justify-between p-4">
          {/* Logo Placeholder */}
          <img src="logo.png" className="w-36" alt="Logo" />

          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu Links */}
        <ul className="flex flex-col items-center p-6 space-y-6 text-white">
          <li>
            <Link
              activeClass="text-blue-500"
              to="Main"
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer p-2 text-xl block w-full text-center hover:text-blue-500"
              onClick={toggleMenu}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              activeClass="text-blue-500"
              to="About"
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer p-2 text-xl block w-full text-center hover:text-blue-500"
              onClick={toggleMenu}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              activeClass="text-blue-500"
              to="Contactus"
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer p-2 text-xl block w-full text-center hover:text-blue-500"
              onClick={toggleMenu}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navebar;
