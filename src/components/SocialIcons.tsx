import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

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
      <a
        href="#"
        className="text-gray-600 hover:text-primary transition-colors"
      >
        <FaTwitter size={20} />
      </a>
      <a
        href="#"
        className="text-gray-600 hover:text-primary transition-colors"
      >
        <FaLinkedin size={20} />
      </a>
    </div>
  );
};

export default SocialIcons;
