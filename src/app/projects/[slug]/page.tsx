"use client";

import { useParams } from 'next/navigation';
import { projects, Project, SubCategory } from '../ProjectsData/projectsData';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((project: Project) => project.id === slug);
  
  if (!project) {
    return <div className="min-h-screen bg-gray-900 py-28 px-4 sm:px-6 lg:px-8 text-white font-playfair">Project not found</div>;
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
          {project.title}
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.subCategories.map((subcategory: SubCategory, index: number) => (
            <motion.div key={index} className="bg-gray-800 rounded-lg shadow-md p-6" variants={fadeInUp}>
              <Image src={subcategory.image} alt={subcategory.subtitle} width={500} height={300} className="mb-4 w-full h-auto rounded-lg" />
              <h2 className="text-xl font-semibold mb-2 text-yellow-500">{subcategory.subtitle}</h2>
              <p className="text-gray-300 mb-4">{subcategory.location}</p>
              <h3 className="text-lg font-semibold mb-2 text-white">Services Provided</h3>
              <ul className="list-disc list-inside mb-4 text-gray-300">
                {subcategory.service1 && <li>{subcategory.service1}</li>}
                {subcategory.service2 && <li>{subcategory.service2}</li>}
                {subcategory.service3 && <li>{subcategory.service3}</li>}
                {subcategory.service4 && <li>{subcategory.service4}</li>}
                {subcategory.service5 && <li>{subcategory.service5}</li>}
              </ul>
              <Link href={`/projects/${project.id}/${subcategory.subtitle}`} className="block text-center bg-yellow-500 text-black py-2 px-4 hover:bg-yellow-600">
                View More
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}