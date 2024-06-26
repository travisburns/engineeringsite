'use client';

import { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import contactImg from '../BeavertonOffice.jpg';
import Image from 'next/image';

export default function ContactUsPage() {
  const form = useRef<HTMLFormElement>(null);

  
  

  return (
    <section className="container mx-auto py-12">
      <div className="text-white font-playfair">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8">Contact Us</h1>
        <Image src={contactImg} alt="Beaverton Office" className="w-full mb-8 rounded-lg shadow-lg" />
        <div className="bg-black text-center p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4">Beaverton Oregon</h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">9615 SW Allen Blvd., Suite 107</p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Beaverton, OR 97005</p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Phone: 503.292.6000</p>
        </div>
        <form ref={form} className="mt-8">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              required
              className="w-full px-4 py-2 text-black rounded-lg"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              required
              className="w-full px-4 py-2 text-black rounded-lg"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Phone"
              name="user_phone"
              required
              className="w-full px-4 py-2 text-black rounded-lg"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              required
              className="w-full px-4 py-2 text-black rounded-lg"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Message"
              required
              className="w-full px-4 py-2 text-black rounded-lg"
              rows={5}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}