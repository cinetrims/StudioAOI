
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white 
    ">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-kanit text-gray-800">
          STUDIO.AIO
        </div>
        <div className="space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Pages
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Services
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Team
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
