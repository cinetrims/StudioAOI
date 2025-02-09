import React from 'react';
import arrow from "../assets/images/arrow2.png"; // Importing the arrow image
import gallery1 from "../assets/images/gallery1.png";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from '../assets/images/gallery3.jpg';
import gallery4 from '../assets/images/gallery4.jpg';
import gallery5 from '../assets/images/gallery5.jpg';
import gallery6 from '../assets/images/gallery6.jpg';


const Gallery = () => {
  const imageList = [
    { id: 1, title: 'Kanakamala', imgSrc: gallery1 },
    { id: 2, title: 'Kanakamala', imgSrc: gallery2 },
    { id: 3, title: 'Kanakamala', imgSrc: gallery3 },
    { id: 4, title: 'Kanakamala', imgSrc: gallery4 },
    { id: 5, title: 'Kanakamala', imgSrc: gallery6 },
    { id: 6, title: 'Kanakamala', imgSrc: gallery5 }, 
  ];

  const divideIntoGroups = (array, groupSize) => {
    const groups = [];
    for (let i = 0; i < array.length; i += groupSize) {
      // Slice the array into groups and push to the groups array
      groups.push(array.slice(i, i + groupSize));
    }
    return groups;
  };

  const groupedImages = divideIntoGroups(imageList, 6);

  return (
    <div>
      <div className="flex flex-col pt-16 mx-12">
        {/* Top Section with Title and Button */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-3/4 w-full text-center lg:text-left">
            <h2 className="text-5xl font-medium text-black font-clash tracking-wide">
              Explore Our Curated Project Gallery
            </h2>
          </div>
          <div className="lg:w-1/4 w-full mt-6 lg:mt-0 flex justify-center lg:justify-end">
            <button className="inline-flex items-center px-6 py-3 bg-black text-white font-medium text-lg rounded-2xl hover:bg-gray-900 transition-all duration-300 focus:outline-none font-figtree">
              View More →
            </button>
          </div>
        </div>
        
        {/* Description Text Below */}
        <div className="mt-8 lg:w-2/3">
          <p className="text-xl font-normal font-clash text-black leading-relaxed">
            Our portfolio showcases a range of projects, from cozy living rooms to luxurious bedrooms, and everything in between. We have worked on residential projects, commercial spaces, and hospitality interiors, and have experience working with a variety of design styles.
          </p>
        </div>
      </div>

      <div className="px-4 md:px-12 py-12 mt-5">
        {groupedImages.map((images) => (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-3 m-3">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`relative group rounded-2xl overflow-hidden shadow-lg ${
                  // Only apply row spans on larger screens
                  index%5 === 0 
                    ? 'md:row-span-1' 
                    : index%4 === 0 
                    ? 'md:row-span-2' 
                    : index%2 === 0 
                    ? 'md:row-span-1' 
                    : 'md:row-span-2'
                } h-[300px] md:h-full`}
              >
                <img
                  src={image.imgSrc}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-black via-black/50 to-transparent h-[40%] flex items-end">
                  <p className="text-xl font-medium font-clash text-white mb-2">{image.title}</p>
                </div>
                {/* Arrow button */}
                <button className="absolute bottom-2 right-2 p-2 rounded-full shadow-lg bg-white bg-opacity-75">
                  <img
                    src={arrow}
                    alt="Arrow Button"
                    className="w-8 h-8"
                  />
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
