import React from 'react'
import about1 from "../assets/images/about1.png"

const Aboutus = () => {
  return (
    <div>
    <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-6 pt-20 mx-12">
    {/* Left Image Section */}
    <div className="lg:w-3/5 w-full">
      <img
        src={ about1 } 
        alt="Minimalist Design"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
    <div className="lg:w-2/5 w-full mt-8 lg:mt-0 text-center lg:text-left">
        <p className="text-lg text-black font-clash font-medium">Elegance. Timeless. Minimalist.</p>
        <h2 className="text-5xl font-medium text-black font-clash mt-4 tracking-wide">
          Minimalist design <br /> with natural light
        </h2>
        <p className="text-base mt-4 font-normal text-black leading-relaxed">
          Discover a symphony of form and function, where innovative design meets timeless elegance. Our interiors focus on usable spaces that not only aesthetically please but also enhance the mood. Let us transform your vision into awe-inspiring structures that redefine the art of living.
        </p>
        {/* Button */}
        <button className="mt-6 inline-flex items-center px-6 py-3 bg-black text-white font-medium text-lg rounded-2xl hover:bg-gray-900 transition-all duration-300 focus:outline-none font-figtree">
      About us →</button>
      </div>
    </div>
    {/* New Section */}
  
    </div>
  )
}

export default Aboutus