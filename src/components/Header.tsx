// src/components/Header.tsx

import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaBars,
} from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100">
      {/* Logo using SVG */}
      <div className="w-10 h-10">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 30L20 10L30 30H10Z" fill="url(#grad1)" />
          <path d="M12 25L20 15L28 25H12Z" fill="url(#grad2)" />
          <path d="M14 20L20 12L26 20H14Z" fill="url(#grad3)" />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: '#0052cc', stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: '#007bff', stopOpacity: 1 }}
              />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: '#0052cc', stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: '#007bff', stopOpacity: 1 }}
              />
            </linearGradient>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: '#0052cc', stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: '#007bff', stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Social Icons and Hamburger */}
      <div className="flex items-center space-x-4">
        <FaFacebookF className="text-gray-600 hover:text-gray-800 text-lg" />
        <FaInstagram className="text-gray-600 hover:text-gray-800 text-lg" />
        <FaTwitter className="text-gray-600 hover:text-gray-800 text-lg" />
        <FaLinkedinIn className="text-gray-600 hover:text-gray-800 text-lg" />
        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
          <FaBars className="text-white text-lg" />
        </div>
      </div>
    </header>
  );
};

export default Header;
