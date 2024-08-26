import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-8">
      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mb-6">
        <a
          href="https://www.facebook.com/people/Kunal-Cineframes/pfbid02EYR8cJUkMnwUgffk83zNGgbRvXEsCnWNfpy2Tjskh7RQB8b1fYMkzKX2q1tvv5oVl/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-gray-400"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/kunalcineframes/?igsh=MWY1Zm1iajR3c2h5bg%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-gray-400"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.youtube.com/@KunalCineframes-nv3vx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-gray-400"
        >
          <FaYoutube />
        </a>
        <a
          href="https://web.whatsapp.com/send?phone=+353892690763&amp;text=Hi, I would like to get more information.."
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-gray-400"
        >
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
