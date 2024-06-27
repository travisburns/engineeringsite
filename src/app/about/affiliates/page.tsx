"use client"

import { motion } from 'framer-motion';
import AffiliatesData from './affiliatesData/AffiliatesData';
import Image from 'next/image';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function AffiliatesPage() {
  return (
    <motion.div 
      className="text-white font-playfair"
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.1 } }
      }}
    >
      <motion.h1 
        className="text-4xl sm:text-5xl lg:text-6xl mb-8 font-bold"
        variants={fadeInUp}
      >
        Affiliates
      </motion.h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {AffiliatesData.map((affiliate, index) => (
          <motion.div 
            key={index} 
            className="bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center"
            variants={fadeInUp}
          >
            <div className="relative w-full h-40 mb-4">
              <Image src={affiliate.image} alt={affiliate.name} layout="fill" objectFit="contain" className="rounded-lg" />
            </div>
            <a href={affiliate.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold hover:underline">
              {affiliate.name}
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}