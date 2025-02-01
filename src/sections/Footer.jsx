import React from 'react';
import image from '../assets/images/contact.png';
import SectionLayout from '../components/sectionLayout';

const Footer = () => {
  const footer_data = [
    {
      title: 'About',
      links: [
        {
          title: 'Our Story',
          link: '#',
        },
        {
          title: 'Careers',
          link: '#',
        },
        {
          title: 'Contact',
          link: '#',
        },
      ],
    },
    {
      title: 'Customer Service',
      links: [
        {
          title: 'Prices and Payments',
          link: '#',
        },
        {
          title: 'Terms of Service',
          link: '#',
        },
        {
          title: 'Privacy Policy',
          link: '#',
        },
      ],
    },
    {
      title: 'Social Media',
      links: [
        {
          title: 'Instagram',
          link: '#',
        },
        {
          title: 'Facebook',
          link: '#',
        },
        {
          title: 'LinkedIn',
          link: '#',
        },
      ],
    },
  ];
  return (
    <footer className="bg-black text-white py-16 px-8 md:px-14 font-clash">
      <SectionLayout>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Left Side - Text */}
          <div className="lg:w-2/3 space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold">Engage With Us In Conversation.</h1>
            <p className="text-gray-400 lg:max-w-lg">
              We would love to hear from you! Whether you're looking to discuss a new project,
              explore design possibilities, or simply ask a question, our team is here to assist.
              Reach out to us through the contact details below, and we'll get back to you promptly.
              Let's bring your vision to life together!
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="lg:w-1/3 mt-8 lg:mt-0">
            <img src={image} alt="Modern House" className="rounded-lg shadow-lg object-cover" />
          </div>
        </div>

        <div className="flex mt-16 max-md:flex-col max-md:h-screen max-lg:text-sm justify-between ">
          {footer_data.map((item, index) => (
            <div className="flex-col">
              <h2 className="text-xl max-lg:text-base font-semibold">{item.title}</h2>
              <ul className="mt-4 space-y-2 font-light text-white">
                {item.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.link} target="_blank" rel="noopener noreferrer">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex=1">
            <h2
              className="mt-20  max-md:mt-0 text-2xl  font-kanit font-semibold pr-4"
              style={{ letterSpacing: '0.6em' }}
            >
              STUDIO.AOI
            </h2>
          </div>
        </div>
      </SectionLayout>
    </footer>
  );
};

export default Footer;
