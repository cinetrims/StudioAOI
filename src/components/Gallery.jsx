import React from 'react';
import arrow from "../assets/images/arrow2.png"; // Importing the arrow image

const Gallery = () => {
  const imageList = [
    { id: 1, title: 'Kanakamala', imgSrc: 'src/assets/images/gallery1.png' },
    { id: 2, title: 'Kanakamala', imgSrc: 'src/assets/images/gallery2.jpg' },
    { id: 3, title: 'Kanakamala', imgSrc: 'src/assets/images/gallery3.jpg' },
    { id: 4, title: 'Kanakamala', imgSrc: 'src/assets/images/gallery4.jpg' },
    { id: 5, title: 'Kanakamala', imgSrc: 'src/assets/images/gallery6.jpg' },
    { id: 6, title: 'Kanakamala', imgSrc: 'src/assets/images/gallery5.jpg' }, 
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
      <div className="flex flex-col lg:flex-row items-center justify-between pt-16 mx-12">
        {/* Left Text Section */}
        <div className="lg:w-3/5 w-full lg:mr-8">
          <h2 className="text-5xl font-medium text-black font-clash tracking-wide">
            Explore Our Curated Project Gallery
          </h2>
        </div>
        {/* Button */}
        <div className="lg:w-2/5 w-full mt-6 lg:mt-0 text-center lg:text-right">
          <button className="mt-4 inline-flex items-center px-6 py-3 bg-black text-white font-medium text-lg rounded-2xl hover:bg-gray-900 transition-all duration-300 focus:outline-none font-figtree">
            View More →
          </button>
          <p className="mt-3 text-sm font-normal font-clash text-black leading-relaxed">
            Our portfolio showcases a range of projects, from cozy living rooms to luxurious bedrooms, and everything in between. We have worked on residential projects, commercial spaces, and hospitality interiors, and have experience working with a variety of design styles.
          </p>
        </div>
      </div>

        <div className="px-12 py-12 mt-5">
          {groupedImages.map((images) => (
            <div className="grid grid-cols-3 grid-rows-3 gap-3 m-3 h-lvh">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`relative group rounded-2xl overflow-hidden shadow-lg ${
                  index%5 == 0 ? `row-span-1` : index%4 == 0 ? `row-span-2` : index%2 == 0 ? 'row-span-1' : 'row-span-2'
                }`}
              >
                {/* Image */}
                <img
                  src={image.imgSrc}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                {/* Title on Image */}
                <div className="absolute bottom-0 left-0 p-2 w-full bg-opacity-50 text-white">
                  <p className="text-lg font-medium font-clash">{image.title}</p>
                </div>
                {/* Arrow Image Button */}
                <button className="absolute bottom-0 right-0 p-2 rounded-full shadow-lg">
                  <img
                    src={arrow}
                    alt="Arrow Button"
                    className="w-10 h-10"
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
