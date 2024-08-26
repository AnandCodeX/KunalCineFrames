import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8" id='Footer'>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left px-4">
        {/* Shutter Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">SHUTTER</h3>
          <p className="text-gray-600">
            Shutter is a group of professional photographers from Amsterdam. We
            love to share our work. Get inspired by our photos!
          </p>
        </div>

        {/* About Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">ABOUT US</h3>
          <ul className="text-gray-600 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Useful Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">USEFUL LINKS</h3>
          <ul className="text-gray-600 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Featured Gallery
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Full Gallery
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog Archive
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">FOLLOW US</h3>
          <ul className="flex justify-center md:justify-start space-x-4 text-gray-600">
            <li>
              <a href="#" className="hover:text-blue-600">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-600">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer
