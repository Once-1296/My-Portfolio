import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
   const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <nav className="bg-gray-900 text-white shadow-md px-6 py-4">
      {/* Top Row */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1
          id="PortfolioHead"
          className="text-red-500 text-xl md:text-2xl font-bold"
        >
          My Portfolio
        </h1>

        {/* Hamburger icon for mobile */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li id="myNav"><Link to="/">Home</Link></li>
          <li id="myNav"><Link to="/about">About</Link></li>
          <li id="myNav"><Link to="/skills">Skills</Link></li>
          <li id="myNav"><Link to="/achievements">Achievements</Link></li>
          <li id="myNav"><Link to="/projects">Projects</Link></li>
          <li id="myNav"><Link to="/contact">Contact</Link></li>
          <li id="myNav">
            <a
              href="/assets/resume.pdf"
              download="Awwab_Wadekar_Resume.pdf"
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition duration-200"
            >
              📄 Download Resume
            </a>
          </li>
          <li>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 px-3 py-2 rounded-lg border border-gray-500 hover:bg-gray-700 dark:hover:bg-gray-300 transition duration-200"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </li>
        </ul>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="flex flex-col mt-4 space-y-3 md:hidden bg-gray-800 rounded-lg p-4">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link></li>
          <li><Link to="/achievements" onClick={() => setMenuOpen(false)}>Achievements</Link></li>
          <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li>
            <a
              href="/assets/resume.pdf"
              download="Awwab_Wadekar_Resume.pdf"
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold px-3 py-2 rounded-lg hover:opacity-90 transition duration-200 block text-center"
            >
              📄 Download Resume
            </a>
          </li>
          <li>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 px-3 py-2 rounded-lg border border-gray-500 hover:bg-gray-700 dark:hover:bg-gray-300 transition duration-200"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
