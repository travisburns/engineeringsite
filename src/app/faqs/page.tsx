'use client';

import FaqsData from './FaqsData';
import FaqAccordion from './FaqAccordion';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function FaqsPage() {
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
          Frequently Asked Questions
        </motion.h1>
        <div className="max-w-3xl mx-auto">
          {FaqsData.map((faq, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <FaqAccordion question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}