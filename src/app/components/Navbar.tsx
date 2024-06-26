"use client";

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Icon } from 'react-icons-kit'
import { menu } from 'react-icons-kit/feather/menu'
import { x } from 'react-icons-kit/feather/x'


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Faqs', path: '/faqs' },
    { name: 'News', path: '/news' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact/contactUs' },
  ];

  console.log(navItems);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item) => (
              <Link key={item.name} href={item.path} className="text-white hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-500 focus:outline-none"
            >
              <Icon icon={navbarOpen ? x : menu} size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${navbarOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link key={item.name} href={item.path} className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium">
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;