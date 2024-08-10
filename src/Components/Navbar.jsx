import React, { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (window.innerWidth > 1024) {
        // Only apply hover effect on larger screens
        if (event.clientY <= 50) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 bg-green-500 py-4 text-white shadow-md transition-transform duration-300 ease-out ${
        isVisible
          ? "translate-y-0"
          : "md:pointer-events-none md:-translate-y-20"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="/" className="text-2xl font-bold text-white">
          Spectrum Energies
        </a>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <ul
          className={`md:flex md:space-x-6 md:font-medium ${isMenuOpen ? "block" : "hidden"} absolute left-0 right-0 top-full bg-green-500 md:static md:bg-transparent`}
        >
          {navItems.map((item, index) => (
            <li className="px-4 py-2 md:p-0">
              <a
                key={index}
                href={item.href}
                className="block transition-colors hover:text-green-700"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
