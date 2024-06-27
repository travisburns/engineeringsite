'use client';
import { useRef } from 'react';
import Image from 'next/image';
import contactImg from '../BeavertonOffice.jpg';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ContactUsPage() {
  const form = useRef<HTMLFormElement>(null);

  return (
    <motion.section 
      className="text-white font-playfair"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      <motion.h1 
        className="text-4xl sm:text-5xl lg:text-6xl mb-8 font-bold"
        variants={fadeInUp}
      >
        Contact Us
      </motion.h1>
      <motion.div className="mb-8 max-w-4xl mx-auto" variants={fadeInUp}>
        <Image
          src={contactImg}
          alt="Beaverton Office"
          className="w-full rounded-lg shadow-lg"
          width={800}
          height={600}
          layout="responsive"
        />
      </motion.div>
      <motion.div 
        className="bg-gray-800 text-center p-8 rounded-lg shadow-lg mb-8 max-w-2xl mx-auto"
        variants={fadeInUp}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 text-yellow-500">Beaverton Oregon</h2>
        <p className="text-lg sm:text-xl">9615 SW Allen Blvd., Suite 107</p>
        <p className="text-lg sm:text-xl">Beaverton, OR 97005</p>
        <p className="text-lg sm:text-xl">Phone: 503.292.6000</p>
      </motion.div>
      <motion.form 
        ref={form} 
        className="space-y-4 max-w-2xl mx-auto"
        variants={fadeInUp}
      >
        <input
          type="text"
          placeholder="Name"
          name="user_name"
          required
          className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          name="user_email"
          required
          className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg"
        />
        <input
          type="text"
          placeholder="Phone"
          name="user_phone"
          required
          className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg"
        />
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          required
          className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg"
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg"
          rows={5}
        ></textarea>
        <button
          type="submit"
          className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
        >
          Send Message
        </button>
      </motion.form>
    </motion.section>
  );
}