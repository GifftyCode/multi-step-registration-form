import React from 'react';

// Footer component with copyright and links
const Footer: React.FC = () => {
  return (
    <footer className="flex justify-between items-center p-4 bg-gray-100 text-sm text-gray-600">
      <span>&copy; 2023 Mastenia</span>
      <span>Purchase Template | Contacts</span>
    </footer>
  );
};

export default Footer;
