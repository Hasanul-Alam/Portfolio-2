import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-white">
      <div className="w-[80%] mx-auto px-4 max-md:w-[90%] max-md:px-0">
        <div className="flex justify-between items-center h-16">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-gray-800">
              <img
                className=""
                src="https://i.ibb.co.com/TH8HB59/Logo.png"
                alt="LOGO"
              />
            </a>
          </div>

          {/* Menu options in the middle (hidden on mobile) */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-800 hover:text-black font-bold">
              About Me
            </a>
            <a href="#" className="text-gray-800 hover:text-black font-bold">
              Skills
            </a>
            <a href="#" className="text-gray-800 hover:text-black font-bold">
              Project
            </a>
            <a href="#" className="text-gray-800 hover:text-black font-bold">
              Contact Me
            </a>
          </div>

          {/* Button on the right (hidden on mobile) */}
          <div className="hidden md:flex">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Resume
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-black focus:outline-none focus:text-gray-800"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu options */}
      {isMenuOpen && (
        <div className="md:hidden">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 font-bold"
          >
            About Me
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 font-bold"
          >
            Skills
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 font-bold"
          >
            Project
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 font-bold"
          >
            Contact Me
          </a>
          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Resume
          </button>
        </div>
      )}
    </nav>
  );
}
