import React from 'react';
import image from '../assets/images/contact.png';

const Contact = () => {
  return (
    <div className="bg-black text-white py-16 px-8 md:px-14 lg:px-14 font-clash">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
        {/* Left Side - Text */}
        <div className="lg:w-2/3 space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold">Engage With Us In Conversation.</h1>
          <p className="text-gray-400 lg:max-w-lg">
            We would love to hear from you! Whether you're looking to discuss a new project, explore design possibilities, or simply ask a question, our team is here to assist. Reach out to us through the contact details below, and we'll get back to you promptly. Let’s bring your vision to life together!
          </p>
        </div>
        
        {/* Right Side - Image */}
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <img
            src={image}
            alt="Modern House"
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      
      <div className="flex mt-16 max-md:flex-col max-md:h-screen max-lg:text-sm justify-between ">
        {/* About Section */}
        <div className="flex-col">
          <h2 className="text-xl max-lg:text-base font-semibold">About</h2>
          <ul className="mt-4 space-y-2 font-light text-white">
            <li>Our Story</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Customer Service Section */}
        <div className="flex-col">
          <h2 className="text-xl max-lg:text-base font-semibold ">Customer Service</h2>
          <ul className="mt-4 space-y-2 font-light text-white">
            <li>Prices and Payments</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Social Media Links */}
          <div className="flex-col">
            <h2 className="text-xl max-lg:text-base font-semibold">Social Media</h2>
            <ul className="mt-4 space-y-2 font-light text-white">
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>


          <div className="flex=1">
            <h2 className="mt-20  max-md:mt-0 text-2xl  font-kanit font-semibold pr-4"style={{ letterSpacing: '0.6em' }}>STUDIO.AOI</h2>
            
          </div>
        
      </div>
      
    </div>
  );
};

export default Contact;
