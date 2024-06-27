'use client';

import Link from 'next/link';
import { services, Service } from './servicesData/ServicesData';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ServicesPage() {
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
          Services
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: Service) => (
            <motion.div key={service.id} variants={fadeInUp}>
              <Link href={`/services/${service.id}`}>
                <div className="bg-gray-800 rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <Image src={service.img} alt={service.title} width={80} height={80} className="mr-4" />
                    <h2 className="text-xl font-semibold text-yellow-500">{service.title}</h2>
                  </div>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}