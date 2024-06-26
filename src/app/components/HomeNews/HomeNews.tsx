'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NewsData from '@/app/news/NewsData/NewsData'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const HomeNews = () => {
  // Get the latest 3 news items
  const latestNews = NewsData.slice(0, 3)

  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className='text-white font-playfair font-bold text-3xl md:text-4xl lg:text-5xl mb-12 text-center'
          variants={headerVariants}
          initial="hidden"
          animate={controls}
        >
          Latest News
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {latestNews.map((story) => (
            <motion.div 
              key={story.id} 
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              variants={itemVariants}
            >
              <div className="relative h-48">
                <Image
                  src={story.img}
                  alt={story.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair text-white mb-2">{story.SEOTitle}</h3>
                <p className="text-gray-300 text-sm mb-4">{story.date}</p>
                <p className="text-gray-300 mb-6 line-clamp-3">{story.description}</p>
                <Link href={`/news/${story.id}`} className="inline-block bg-yellow-500 text-gray-900 font-playfair py-2 px-4 rounded hover:bg-yellow-600 transition duration-300">
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          className="text-center mt-12"
          variants={itemVariants}
          initial="hidden"
          animate={controls}
        >
          <Link href="/news" className="inline-block bg-yellow-500 text-gray-900 font-playfair py-3 px-8 hover:bg-yellow-600 transition duration-300">
            View More News
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default HomeNews