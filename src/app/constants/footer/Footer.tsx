'use client'
import Image from 'next/image'
import Link from 'next/link'

import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about/aboutus' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'News', path: '/news' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact/contactus' },
  ]

  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div>
         
          <p className="text-gray-400 mb-6">
            Providing innovative engineering solutions for over a decade.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6">Quick Links</h3>
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.path} className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6">Contact Us</h3>
          <p className="mb-4">9615 SW Allen Blvd., Suite 107</p>
          <p className="mb-4">Beaverton, OR 97005</p>
          <p className="mb-4">Phone: 503.292.6000</p>
          <p className="mb-4">Email: info@example.com</p>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Your Engineering Firm. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer