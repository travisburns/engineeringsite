"use client";
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ContactPage() {
  return (
    <motion.div 
      className="text-white font-playfair"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      <motion.h1 
        className="text-4xl sm:text-5xl lg:text-6xl mb-8 font-bold"
        variants={fadeInUp}
      >
        Contact
      </motion.h1>
    </motion.div>
  );
}