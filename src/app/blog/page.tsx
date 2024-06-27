'use client';

import Link from 'next/link';
import { BlogPost, BlogData } from './BlogData';
import Image from 'next/image';
import { motion } from 'framer-motion';

const POSTS_PER_PAGE = 6;

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function BlogPage({ searchParams }: { searchParams: { page?: string } }) {
  const page = parseInt(searchParams.page || '1');
  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const blogPosts = BlogData.slice(startIndex, endIndex);

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
          Blog
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post: BlogPost) => (
            <motion.div 
              key={post.id} 
              className="bg-gray-800 shadow-lg rounded-lg p-6"
              variants={fadeInUp}
            >
              <Image src={post.img} alt={post.SEOTitle} width={500} height={300} className="mb-4 w-full h-auto rounded-lg" />
              <p className="text-gray-300 mb-2">{post.date}</p>
              <Link href={`/blog/${post.id}`}>
                <h2 className="text-xl font-semibold mb-2 text-yellow-500 hover:text-yellow-400 transition-colors duration-300">{post.SEOTitle}</h2>
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div className="flex justify-center mt-8" variants={fadeInUp}>
          {page > 1 && (
            <Link href={`/blog?page=${page - 1}`} className="px-4 py-2 bg-yellow-500 text-black rounded-lg mr-4 hover:bg-yellow-400">
              Previous
            </Link>
          )}
          {endIndex < BlogData.length && (
            <Link href={`/blog?page=${page + 1}`} className="px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400">
              Next
            </Link>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}