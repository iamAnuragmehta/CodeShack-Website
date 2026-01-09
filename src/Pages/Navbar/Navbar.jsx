import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            &lt;CodeShack/&gt;
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            
            <Link
              to="/members"
              className={`${
                isActive("/members")
                  ? "text-black font-semibold"
                  : "text-gray-600"
              } hover:text-black`}
            >
              Members
            </Link>

            <Link
              to="/blogs"
              className={`${
                isActive("/blogs")
                  ? "text-black font-semibold"
                  : "text-gray-600"
              } hover:text-black`}
            >
              Blogs
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            
            <Link
              to="/members"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-gray-600 hover:text-black"
            >
              Members
            </Link>

            <Link
              to="/blogs"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-gray-600 hover:text-black"
            >
              Blogs
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
