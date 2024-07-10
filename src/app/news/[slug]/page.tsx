"use client";

import { useParams } from 'next/navigation';
import NewsData, { News } from '../NewsData/NewsData';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Params {
  slug: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function NewsDetailPage({ params }: { params: Params}) {
  const { slug } = params;
  const news = NewsData.find((news: News) => news.id === slug);

  if (!news) {
    return <div className="min-h-screen bg-gray-900 py-28 px-4 sm:px-6 lg:px-8 text-white">News not found</div>;
  }

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
          {news.SEOTitle}
        </motion.h1>
        <div className="flex flex-col lg:flex-row">
          <motion.div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8" variants={fadeInUp}>
            <Image src={news.img} alt={news.SEOTitle} width={800} height={500} className="w-full h-auto rounded-lg" />
          </motion.div>
          <div className="lg:w-1/2">
            <motion.p className="text-gray-300 mb-4" variants={fadeInUp}>{news.date}</motion.p>
            <motion.p className="text-lg text-gray-300 mb-4" variants={fadeInUp}>{news.description}</motion.p>
            {news.description2 && <motion.p className="text-lg text-gray-300 mb-4" variants={fadeInUp}>{news.description2}</motion.p>}
            {news.description3 && <motion.p className="text-lg text-gray-300 mb-4" variants={fadeInUp}>{news.description3}</motion.p>}
            {news.description4 && <motion.p className="text-lg text-gray-300 mb-4" variants={fadeInUp}>{news.description4}</motion.p>}
          </div>
        </div>
      </motion.div>
    </div>
  );
}