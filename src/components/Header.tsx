import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaBars,
} from 'react-icons/fa';

// Header component with logo and social icons
const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100">
      {/* Logo */}
      <div className="text-xl font-bold text-blue-700">Logo</div>

      {/* Social Icons and Menu */}
      <div className="flex items-center space-x-4">
        <FaFacebook className="text-blue-600 cursor-pointer" />
        <FaInstagram className="text-pink-600 cursor-pointer" />
        <FaTwitter className="text-blue-400 cursor-pointer" />
        <FaLinkedin className="text-blue-700 cursor-pointer" />
        <FaBars className="text-gray-600 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
