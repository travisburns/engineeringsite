'use client';

import Link from 'next/link';
import { projects, Project } from './ProjectsData/projectsData';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ProjectsPage() {
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
          Explore our Projects
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project) => (
            <motion.div key={project.id} className="bg-gray-800 rounded-lg shadow-md p-6" variants={fadeInUp}>
              <Image src={project.img} alt={project.title} width={500} height={300} className="mb-4 w-full h-auto rounded-lg" />
              <h2 className="text-xl font-semibold mb-2 text-center text-yellow-500">{project.title}</h2>
              <Link href={`/projects/${project.id}`} className="block text-center bg-yellow-500 text-black py-2 px-4 hover:bg-yellow-600">
                View Details
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}