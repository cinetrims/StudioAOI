
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white 
    ">
      <div className="w-full px-14 py-4 flex justify-between items-center">
        <div className="text-2xl font-kanit font-medium text-gray-800 tracking-widest">
          STUDIO.AOI
        </div>
        <div className="space-x-6 font-clash max-md:hidden">
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
