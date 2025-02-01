import React from 'react';
import SectionLayout from '../components/sectionLayout';

const Navbar = () => {
  const NavBar = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Pages',
      link: '/pages',
    },
    {
      title: 'About',
      link: '/about',
    },
    {
      title: 'Team',
      link: '/team',
    },
    {
      title: 'Blog',
      link: '/blog',
    },
    {
      title: 'Contact',
      link: '/contact',
    },
  ];
  return (
    <nav className="bg-white">
      <SectionLayout className="py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-kanit font-medium text-gray-800 tracking-widest">
          STUDIO.AIO
        </a>
        <div className="space-x-6 font-clash max-md:hidden">
          {NavBar.map(item => (
            <a href={item.link} className="text-gray-600 hover:text-gray-900">
              {item.title}
            </a>
          ))}
        </div>
      </SectionLayout>
    </nav>
  );
};

export default Navbar;
