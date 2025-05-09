import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaBars } from "react-icons/fa";

const SocialIcons: React.FC = () => {
  return (
    <div className="flex items-center space-x-4">
      <a
        href="#"
        className="text-gray-600 hover:text-primary transition-colors"
      >
        <FaFacebook size={20} />
      </a>
      <a
        href="#"
        className="text-gray-600 hover:text-primary transition-colors"
      >
        <FaInstagram size={20} />
      </a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-5 h-5 text-gray-600 hover:text-gray-800"
      >
        <path
          d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zM16.62 20.533h2.046L7.375 3.47H5.22l11.4 17.063z"
          fill="currentColor"
        />
      </svg>
      <a
        href="#"
        className="text-gray-600 hover:text-primary transition-colors"
      >
        <FaLinkedin size={20} />
      </a>

      <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
        <FaBars className="text-white text-lg" />
      </div>
    </div>
  );
};

export default SocialIcons;
