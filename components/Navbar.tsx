"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, ShoppingBag, User } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-heading font-semibold text-charcoal"
          >
            Preshies
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-gold font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-5">
            <button className="text-gray-700 hover:text-gold transition-colors duration-200">
              <Search size={20} />
            </button>
            <button className="text-gray-700 hover:text-gold transition-colors duration-200">
              <User size={20} />
            </button>
            <button className="text-gray-700 hover:text-gold transition-colors duration-200 relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-2 bg-gold text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-gray-700 hover:text-gold transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner border-t border-gray-100">
          <div className="px-4 py-3 space-y-3">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-gold font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}

            <div className="flex space-x-4 pt-3 border-t border-gray-100">
              <button className="text-gray-700 hover:text-gold transition-colors duration-200">
                <Search size={20} />
              </button>
              <button className="text-gray-700 hover:text-gold transition-colors duration-200">
                <User size={20} />
              </button>
              <button className="text-gray-700 hover:text-gold transition-colors duration-200 relative">
                <ShoppingBag size={20} />
                <span className="absolute -top-1 -right-2 bg-gold text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  2
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
