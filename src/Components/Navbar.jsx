import { useState, useEffect } from "react";
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed flex items-center justify-between px-8  w-full z-10 top-0 left-0 h-12 bg-gray-800">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-30 w-32 h-24" src={logo}  alt="logo" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <ul>
          <li className="m-8 flex items-center justify-center gap-36 text-lg mr-80">
            <a href="#1" className="text-white hover:text-sky-400">BMI-About</a>
            <a href="#2" className="text-white hover:text-sky-400">BMI-Values</a>
            <a href="#3" className="text-white hover:text-sky-400">BMI-Calculator</a>
           
          </li>
        </ul>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden text-white">
        <button
          onClick={toggleMenu}
          className=" focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-12 left-0 w-full bg-gray-800 py-4 px-8">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#1" className="block text-white hover:text-sky-400" onClick={() => setIsOpen(false)}>BMI-About</a>
            </li>
            <li>
              <a href="#2" className="block text-white hover:text-sky-400" onClick={() => setIsOpen(false)}>BMI-Values</a>
            </li>
            <li>
              <a href="#3" className="block text-white hover:text-sky-400" onClick={() => setIsOpen(false)}>BMI-Calculator</a>
            </li>
           
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;