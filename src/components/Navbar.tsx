import  { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Coffee, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Drinks" },
    { to: "/snacks", label: "Snacks" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <NavLink to="/" className="flex items-center gap-2 text-blue-600">
        <Coffee className="h-8 w-8" />
        <span className="text-2xl font-bold">foam</span>
      </NavLink>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `hover-underline ${isActive ? 'text-blue-600' : 'text-blue-900'} hover:text-blue-600 transition-colors`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-blue-900 hover:text-blue-600 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-6 py-3 ${isActive ? 'text-blue-600 bg-blue-50' : 'text-blue-900'} hover:bg-blue-50 transition-colors`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}