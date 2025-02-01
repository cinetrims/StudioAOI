import React from 'react';
import about1 from '../assets/images/about1.png';
import Button from '../components/button';
import SectionLayout from '../components/sectionLayout';

const Aboutus = () => {
  return (
    <SectionLayout className="flex flex-col lg:flex-row items-center justify-center lg:gap-x-6 pt-20 mx-12">
        {/* Left Image Section */}
        <div className="lg:w-3/5 w-full">
          <img
            src={about1}
            alt="Minimalist Design"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-2/5 w-full mt-8 lg:mt-0 text-center lg:text-left">
          <p className="text-lg text-black font-clash font-medium">
            Elegance. Timeless. Minimalist.
          </p>
          <h2 className="text-5xl font-medium text-black font-clash mt-4 tracking-wide">
            Minimalist design <br /> with natural light
          </h2>
          <p className="text-base mt-4 font-normal text-black leading-relaxed">
            Discover a symphony of form and function, where innovative design meets timeless
            elegance. Our interiors focus on usable spaces that not only aesthetically please but
            also enhance the mood. Let us transform your vision into awe-inspiring structures that
            redefine the art of living.
          </p>
          {/* Button */}
          <Button>About us →</Button>
        </div>
    </SectionLayout>
  );
};

export default Aboutus;
