import React, { useState } from "react";
import { Link } from "react-scroll";

const Navebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full">
      <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 text-white z-20">
        <div className="flex items-center">
          <img src="logo.png" className="w-36" alt="Logo" />
        </div>
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
        <ul className="hidden md:flex md:gap-10 list-none">
          <li>
            <Link
              activeClass="text-blue-500"
              to="Main"
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer p-2"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              activeClass="text-blue-500"
              to="Gallery"
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer p-2"
            >
              GALLERY
            </Link>
          </li>
          <li>
            <Link
              activeClass="text-blue-500"
              to="About"
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer p-2"
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
              className="cursor-pointer p-2"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white bg-opacity-75 z-10 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <div className="flex justify-between p-4">
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
        <ul className="flex flex-col items-start p-4 space-y-4">
          <li className="w-full">
            <Link
              activeClass="text-blue-500"
              to="Main"
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer p-2 block w-full"
              onClick={toggleMenu}
            >
              HOME
            </Link>
          </li>
          <li className="w-full">
            <Link
              activeClass="text-blue-500"
              to="About"
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer p-2 block w-full"
              onClick={toggleMenu}
            >
              ABOUT
            </Link>
          </li>
          <li className="w-full">
            <Link
              activeClass="text-blue-500"
              to="Contactus"
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer p-2 block w-full"
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
