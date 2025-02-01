import React from 'react';

export default function Button({ children, ...props }) {
  return (
    <button
      className="mt-4 inline-flex items-center px-6 py-3 bg-black text-white font-medium text-lg rounded-2xl hover:bg-gray-900 transition-all duration-300 focus:outline-none font-figtree"
      {...props}
    >
      {children}
    </button>
  );
}
