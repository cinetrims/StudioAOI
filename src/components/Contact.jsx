import React from 'react';
import image from '../assets/images/contact.png';

const Contact = () => {
  return (
    <div className="bg-black text-white py-16 px-8 md:px-14 lg:px-14 font-clash">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
        {/* Left Side - Text */}
        <div className="lg:w-2/3 space-y-8">
          <h1 className="text-4xl lg:text-7xl font-bold">Engage With Us In Conversation.</h1>
          <p className="text-gray-400 lg:max-w-lg">
            We would love to hear from you! Whether you're looking to discuss a new project, explore design possibilities, or simply ask a question, our team is here to assist. Reach out to us through the contact details below, and we'll get back to you promptly. Let's bring your vision to life together!
          </p>
        </div>
        
        {/* Right Side - Image */}
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <img
            src={image}
            alt="Modern House"
            className="rounded-3xl shadow-lg object-cover w-full"
          />
        </div>
      </div>

      
      <div className="flex mt-32 max-md:flex-col max-md:space-y-8 max-lg:text-sm justify-between">
        {/* About Section */}
        <div className="flex-col md:mr-32">
          <h2 className="text-2xl font-semibold">About</h2>
          <ul className="mt-6 space-y-4 font-light text-white">
            <li>Our Story</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Customer Service Section */}
        <div className="flex-col md:mr-32">
          <h2 className="text-2xl font-semibold">Customer Service</h2>
          <ul className="mt-6 space-y-4 font-light text-white">
            <li>Prices And Payments</li>
            <li>Terms Of Services</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex-col md:mr-32">
          <h2 className="text-2xl font-semibold">Social Media</h2>
          <ul className="mt-6 space-y-4 font-light text-white">
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>

        <div className="md:w-fit md:text-right">
          <h2 className="mt-8 md:mt-20 text-3xl md:text-5xl font-kanit font-semibold tracking-[0.4em] max-md:text-center">STUDIO.AOI</h2>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
