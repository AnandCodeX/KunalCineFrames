import React from "react";
import { Link, Element } from "react-scroll";
const Navebar = () => {
  return (
    <div className="absolute top-0 left-0 w-full flex justify-around items-center p-4 text-white z-10">
      <div className=" ">
        <img src="logo.png " className="w-36" />
      </div>
      <ul className="flex list-none gap-10">
        <li>
          <Link
            activeClass="text-blue-500"
            to="Main"
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
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
            className="cursor-pointer"
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
            className="cursor-pointer"
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
            className="cursor-pointer"
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navebar;
