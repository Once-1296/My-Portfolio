import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 bg-gray-800 text-gray-300 text-center">
      <p>&copy; {new Date().getFullYear()} Awwab Wadekar. All rights reserved.</p>
      <p className="text-sm mt-2">Built with React, Tailwind CSS, and TypeScript.</p>
    </footer>
  );
};

export default Footer;
