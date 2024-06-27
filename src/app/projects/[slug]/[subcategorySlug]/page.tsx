"use client";

import { useParams } from 'next/navigation';
import { projects, Project, SubCategory } from '../../ProjectsData/projectsData';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ProjectDetailSinglePage() {
  const { slug, subcategorySlug } = useParams();
  const project = projects.find((project: Project) => project.id === slug);
  
  if (!project) {
    return <div className="min-h-screen bg-gray-900 py-28 px-4 sm:px-6 lg:px-8 text-white font-playfair">Project not found</div>;
  }
  
  const subcategory = project.subCategories.find((subcategory: SubCategory) => subcategory.subtitle === subcategorySlug);
  
  if (!subcategory) {
    return <div className="min-h-screen bg-gray-900 py-28 px-4 sm:px-6 lg:px-8 text-white font-playfair">Subcategory not found</div>;
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
          {subcategory.SEOTitle}
        </motion.h1>
        <motion.div variants={fadeInUp}>
          <Image src={subcategory.image} alt={subcategory.subtitle} width={800} height={500} className="mb-8 w-full h-auto rounded-lg" />
        </motion.div>
        <motion.p className="text-lg mb-4 text-gray-300" variants={fadeInUp}>{subcategory.descriptionsummary}</motion.p>
        <motion.p className="text-lg mb-4 text-gray-300" variants={fadeInUp}>{subcategory.description1}</motion.p>
      </motion.div>
    </div>
  );
}