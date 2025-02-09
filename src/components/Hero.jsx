import React, { useState } from 'react';
import hero from "../assets/images/Hero.png";
import thumbnail from "../assets/images/modern.png";
import video from "../assets/images/video1.mp4";
import CircularText from './CircularText';

const Hero = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = React.useRef(null);
  
    const handlePlayClick = () => {
        setIsVideoPlaying(true);
    };

    const handlePauseClick = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
        setIsVideoPlaying(false);
    };

    return (
        <div className="mx-6 md:mx-12 relative h-[70vh] md:h-[85vh] flex items-center justify-start">
            {/* Hero Image or Video */}
            {!isVideoPlaying ? (
                <img
                    src={hero}
                    alt="Hero"
                    className="absolute rounded-2xl top-0 w-full h-full object-cover"
                />
            ) : (
                <video
                    ref={videoRef}
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

            {/* Main Title */}
            <div className="relative text-white z-10 w-full">
                <h1 className="font-clash font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-5 mt-8 md:mt-24 text-center px-4">
                    We design your dreams
                </h1>
            </div>

            {/* Bottom Left Content */}
            <div className="absolute bottom-8 left-0 md:left-8 z-10 flex flex-col md:flex-row gap-8 w-full md:w-auto">
                {/* Text Card */}
                <div className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-2xl w-[90%] md:w-[400px] h-[180px] max-lg:w-[320px] mx-auto">
                    <p className="text-white font-clashdisplay text-base max-lg:text-sm mb-4 line-clamp-3">
                        Discover a symphony of form and function, where innovative design meets timeless elegance. Our architecture studio crafts spaces that not only captivate the eye but also enrich the soul.
                    </p>
                    <button className="text-sm bg-black text-white py-2.5 px-5 rounded-full flex items-center hover:bg-gray-800 transition duration-300">
                        View More → 
                    </button>
                </div>

                {/* Video Thumbnail - Hidden on mobile */}
                {!isVideoPlaying && (
                    <div
                        className="relative bg-white bg-opacity-20 backdrop-blur-md p-3 rounded-2xl w-[300px] h-[180px] hidden md:flex items-center justify-center"
                        onClick={handlePlayClick}
                    >
                        <img
                            src={thumbnail}
                            alt="Video Thumbnail"
                            className="rounded-2xl object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button className="bg-white/20 backdrop-blur-lg hover:bg-white/30 text-white rounded-full p-4 transition-all duration-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" stroke="none" fill="currentColor"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Pause Button */}
            {isVideoPlaying && (
                <div className="absolute bottom-[58px] right-[58px] z-50 p-[10px]">
                    <button
                        onClick={handlePauseClick}
                        className="bg-white/20 backdrop-blur-lg hover:bg-white/30 text-white rounded-full p-4 transition-all duration-300"
                        aria-label="Pause video"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" stroke="none" fill="currentColor"/>
                            <path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" stroke="none" fill="currentColor"/>
                        </svg>
                    </button>
                </div>
            )}

            {/* Circular Text */}
            <div className="absolute bottom-8 right-8 z-10 hidden md:block">
                <CircularText />
            </div>
        </div>
    );
};

export default Hero;
