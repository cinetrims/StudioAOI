
import React from 'react';
import hero from "../assets/images/Hero.png"

const Hero = () => {
  return (
    <div className=" mx-10 relative h-[85vh] flex items-center justify-start">
      
      <img
        src={hero}
        alt="Hero"
        className="absolute rounded-2xl top-0 w-full h-full object-cover"
      />
      <div className=" align absolute inset-0  bg-opacity-20"></div>
      <div className="relative text-white px-10 z-10 ">
        <div><h1 className="left-3.5 font-clashdisplay font-bold text-6xl mb-5 mt-36">
          We design your dreams
        </h1>
        </div>

      <div className="bg-white relative border-x-2  bg-opacity-20 backdrop-blur-lg p-3 rounded-2xl w-[423px] h-[150px] mt-36">
      <p className="text-white-800 font-clashdisplay text-base mb-4">
        Discover a symphony of form and function, where innovative design meets timeless elegance. Our architecture studio crafts spaces that not only captivate the eye but also enrich the soul.
      </p>
      <button className="bg-black text-white py-2 px-4 rounded-full flex items-center space-x-2 hover:bg-gray-800 transition duration-300">
      View More 
      </button>
    </div> 
    </div>
    </div>
  );
};

export default Hero;
