import React, { useState } from 'react';
import hero from "../assets/images/Hero.png";
import thumbnail from "../assets/images/modern.png";
import video from "../assets/images/video1.mp4";

const Hero = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
    const handlePlayClick = () => {
        setIsVideoPlaying(true);
    };

    const handlePauseClick = () => {
        setIsVideoPlaying(false); // Pause the video and return to the hero image
    };

    return (
        <div className="mx-12  relative h-[70vh] md:h-[85vh] flex items-center justify-start">
            {/* Hero Image or Video */}
            {!isVideoPlaying ? (
                <img
                    src={hero}
                    alt="Hero"
                    className="absolute rounded-2xl top-0 w-full h-full object-cover"
                />
            ) : (
                <video
                    className="absolute rounded-2xl top-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}

            <div className="absolute inset-0 bg-opacity-20"></div>

            {/* Text Section */}
            <div className="relative text-white z-10">
                <h1 className="font-clash font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-5 mt-24 mx-8 md:mt-36">
                    We design your dreams
                </h1>

                <div className="flex flex-col md:flex-row  mt-8 md:mt-12 space-y-8 md:space-y-0 md:space-x-8">
                    <div className="bg-white bg-opacity-20 backdrop-blur-lg mx-8 p-4 rounded-2xl w-[350px] max-lg:w-[280px]">
                        <p className="text-white-800 font-clashdisplay text-sm max-lg:text-xs mb-3">
                            Discover a symphony of form and function, where innovative design meets timeless elegance. Our architecture studio crafts spaces that not only captivate the eye but also enrich the soul.
                        </p>
                        <button className="max-lg:text-xs bg-black text-white py-2 px-4 rounded-full flex items-center hover:bg-gray-800 transition duration-300">
                            View More → 
                        </button>
                    </div>

                    {!isVideoPlaying && (
                        <div
                            className="relative bg-white bg-opacity-20 backdrop-blur-md p-3 rounded-2xl w-full md:w-[250px]  flex items-center justify-center"
                            onClick={handlePlayClick}
                        >
                            <img
                                src={thumbnail}
                                alt="Video Thumbnail"
                                className="rounded-2xl object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button className="backdrop-blur-md bg-opacity-50 rounded-full p-3 px-4 text-white text-2xl opacity-100 hover:opacity-100 transition-opacity">
                                    ▶
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Pause Button */}
            {isVideoPlaying && (
                <div className="absolute flex items-center justify-center right-5 md:right-20 lg:right-40 bottom-10">
                    <button
                        className="place-content-center bg-white text-black rounded-full p-4 opacity-50 hover:opacity-70 transition-opacity"
                        onClick={handlePauseClick}
                    >
                        ▐▐
                    </button>
                </div>
            )}
        </div>
    );
};

export default Hero;
