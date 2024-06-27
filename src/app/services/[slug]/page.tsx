'use client';

import { useParams } from 'next/navigation';
import { services, Service, SubCategory } from '../servicesData/ServicesData';
import Image from 'next/image';
import ServicesAccordion from './ServicesAccordion';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((service: Service) => service.id === slug);

  if (!service) {
    return <div className="min-h-screen bg-gray-900 py-28 px-4 sm:px-6 lg:px-8 text-white font-playfair">Service not found</div>;
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
          {service.title}
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.subCategories.map((subcategory: SubCategory, index: number) => (
            <motion.div key={index} className="bg-gray-800 rounded-lg shadow-md p-6" variants={fadeInUp}>
              {subcategory.image && (
                <Image src={subcategory.image} alt={subcategory.subtitle} width={200} height={200} className="mb-4" />
              )}
              <h2 className="text-xl font-semibold mb-2 text-yellow-500">{subcategory.subtitle}</h2>
              {Object.keys(subcategory)
                .filter((key) => key.startsWith('subCategory'))
                .map((key) => (
                  <p key={key} className="text-gray-300 mb-1">
                    {subcategory[key as keyof SubCategory]}
                  </p>
                ))}
              {subcategory.accordionContent && (
                <ServicesAccordion title="View Details" content={subcategory.accordionContent} />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}