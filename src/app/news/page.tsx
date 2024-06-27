'use client';

import Link from 'next/link';
import NewsData from './NewsData/NewsData';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-28 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl mb-12 font-bold text-white"
          variants={fadeInUp}
        >
          News
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {NewsData.map((news) => (
            <motion.div 
              key={news.id} 
              className="bg-gray-800 shadow-lg rounded-lg p-6"
              variants={fadeInUp}
            >
              <Image src={news.img} alt={news.SEOTitle} width={500} height={300} className="mb-4 w-full h-auto rounded-lg" />
              <h2 className="text-xl font-semibold mb-2 text-yellow-500">{news.SEOTitle}</h2>
              <p className="text-gray-300 mb-4">{news.date}</p>
              <Link href={`/news/${news.id}`} className="text-yellow-500 hover:underline">
                Read More
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}