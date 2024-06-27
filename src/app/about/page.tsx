'use client';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function AboutPage()  {
  return (
    <motion.div 
      className="text-white font-playfair"
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.3 } }
      }}
    >
      <motion.h1 
        className="text-4xl sm:text-5xl lg:text-6xl mb-8 font-bold"
        variants={fadeInUp}
      >
        About
      </motion.h1>
      <div className="space-y-6 text-lg">
        {['In 1978, R&W began providing engineering services for the Portland metro area. Our office, located in Beaverton, Oregon, now provides engineering services across the United States.',
          'At R&W, we enjoy continuing to market to and serve new clients. We are also excited by the high percentage of our workload that is based upon returning clients. Our clients look to us to provide design solutions for an array of diverse projects that include design for mechanical, electrical, automation, energy, and commissioning. Project types consist of municipal water and waste facilities, commercial buildings, educational buildings, cellular phone sites, cannabis facilities, and industrial facilities.',
          'Learn more about us and our many types of services here and diverse projects here.'
        ].map((paragraph, index) => (
          <motion.p key={index} variants={fadeInUp}>{paragraph}</motion.p>
        ))}
      </div>
    </motion.div>
  )
}