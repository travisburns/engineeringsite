"use client"
import { useParams } from 'next/navigation';
import { BlogPost, BlogData } from '../Blogdata';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

interface Params {
  slug: string;
}

export default function BlogDetailPage({ params }: { params: Params}) {
  const { slug } = params;
  const blogPost = BlogData.find((post: BlogPost) => post.id === slug);

  if (!blogPost) {
    return <div className="min-h-screen bg-gray-900 py-28 px-4 sm:px-6 lg:px-8 text-white">Blog post not found</div>;
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
          {blogPost.SEOTitle}
        </motion.h1>
        <div className="flex flex-col lg:flex-row">
          <motion.div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8" variants={fadeInUp}>
            <Image src={blogPost.img} alt={blogPost.SEOTitle} width={800} height={500} className="w-full h-auto rounded-lg" />
          </motion.div>
          <div className="lg:w-1/2">
            <motion.p className="text-gray-300 mb-4" variants={fadeInUp}>{blogPost.date}</motion.p>
            <div className="text-lg text-gray-300 mb-4">
              {Object.keys(blogPost)
                .filter((key) => key.startsWith('description'))
                .map((key) => {
                  const value = blogPost[key as keyof BlogPost];
                  if (typeof value === 'string') {
                    return (
                      <motion.p key={key} className="mb-4" variants={fadeInUp}>
                        {value}
                      </motion.p>
                    );
                  }
                  return null;
                })}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}