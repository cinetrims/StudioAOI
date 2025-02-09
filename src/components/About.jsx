import React from 'react'
import CountUp from 'react-countup'
import pic1 from "../assets/images/modern.png"
import furniture from "../assets/images/furniture.png"
import arrow from "../assets/images/arrow.png"

const About = () => {
  return (
    <div className="h-screen flex flex-col justify-between py-10 max-md:h-auto max-md:py-10 max-md:pt-16">
      <div className="flex max-md:flex-col justify-between mx-12 max-xl:mx-6 h-[75vh] max-md:h-auto max-md:gap-4">
        {/* Left side: Large image (3/4 of the screen) */}
        <div className="relative w-3/4 max-md:w-full h-full max-md:h-[50vh]">
          {/* Image */}
          <img
            src={pic1}
            alt="Large Image"
            className="w-full h-full object-cover rounded-xl"
          />

          <div className="absolute bottom-1 bg-white p-6 rounded- custom-curve w-[450px] max-lg:w-[350px] max-md:w-[300px]">
            {/* "Gorgeous Interior" Text */}
            <div className="border-1 inline-block bg-white left-0 font-clash font-medium text-black py-1 px-2 rounded-full border-2 border-black text-sm">
              Gorgeous Interior
            </div>

            {/* "Modern Minimalist" Text */}
            <div className="font-clash text-black font-medium text-[62px] leading-tight max-lg:text-[48px] max-md:text-[40px]">
              Modern <br /> Minimalist
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between ml-8 max-md:ml-0 max-md:mt-4 w-1/3 max-md:w-full min-w-32 h-full max-md:h-auto max-md:gap-4">
          {/* Box 1 */}
          <div className="font-clash max-md:h-[200px] rounded-2xl pl-6 pr-6 bg-[#E0CAB6] bg-opacity-80 w-full p-[20px]">
            <div className="flex flex-col justify-center h-full">
              <span className="text-black border-2 border-black font-light rounded-full py-1 px-3 w-[90px] mb-4 text-sm max-lg:text-xs">
                Aesthetic
              </span>
              <p className="text-black font-clash font-base text-base max-lg:text-xs p-[5px]">
                Aesthetic design where every<br />pieces tells a story of style
              </p>
              <h2 className="text-black font-medium text-4xl mt-2 max-lg:text-xl p-[5px]">
                Into a gallery of <br />elegance
              </h2>
            </div>
          </div>

          {/* Box 2 */}
          <div className="relative flex-1 mt-8 rounded-2xl overflow-hidden">
            {/* Background image */}
            <img
              src={furniture}
              alt="Furniture"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-20"></div>
            {/* Overlay text */}
            <div className="absolute top-4 left-4">
              <span className="text-sm text-white font-clash rounded-full border-2 border-white px-3 py-1">Furniture</span>
              <p className="mt-5 text-lg font-light font-clash text-white leading-tight">
                Indulge in the artistry of <br />everyday living
              </p>
            </div>

            <div className="absolute -bottom-5 -right-5">
              <button className="absolute top-4 right-6 bottom-2 w-14 h-14 max-lg:right-2 max-lg:top-1 max-lg:h-12NPM max-lg:w-12">
                <img
                  src={arrow}
                  alt="Button Icon"
                  className="w-full h-full max-lg:h-8 max-lg:w-8 object-cover"
                />
              </button>
              <div className="w-24 h-24 max-lg:h-16 max-lg:w-16 rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center justify-around items-center font-clash max-md:flex-col max-md:space-y-10 max-md:mt-12 max-md:mb-6 mx-24 max-xl:mx-12 h-[15vh] max-md:h-auto">
        <div className="text-center">
          <h1 className="text-5xl font-medium">
            <CountUp end={100} duration={2} />+
          </h1>
          <p className="text-[#727272] mt-2 text-lg">Products</p>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-medium">
            <CountUp end={25} duration={2} />+
          </h1>
          <p className="text-[#727272] mt-2 text-lg">Projects</p>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-medium">
            <CountUp end={80} duration={2} />+
          </h1>
          <p className="text-[#727272] mt-2 text-lg">satisfied Customers</p>
        </div>
      </div>
    </div>
  )
}

export default About