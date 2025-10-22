import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-md">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <ul className="flex space-x-6">
        <li id="myNav"><Link to="/">Home</Link></li>
        <li id="myNav"><Link to="/about">About</Link></li>
        <li id="myNav"><Link to="/skills">Skills</Link></li>
        <li id="myNav"><Link to="/achievements">Achievements</Link></li>
        <li id="myNav"><Link to="/projects">Projects</Link></li>
        <li id="myNav"><Link to="/contact">Contact</Link></li>
        <li id="myNav"><a
  href="/assets/resume.pdf"
  download="Awwab_Wadekar_Resume.pdf"
  className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition duration-200"
>
  📄 Download Resume
</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
