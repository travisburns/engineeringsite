'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import HomeStatsImg from './homestats.png'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = [
  { number: '10+', text: 'Years Experience' },
  { number: '50+', text: 'Completed Projects' },
  { number: '25+', text: 'Industry Awards' },
  { number: '100%', text: 'Client Satisfaction' },
]

const HomeStats = () => {
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
        staggerChildren: 0.2,
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

  const textVariants = {
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
    <div className="relative py-16 sm:py-24 lg:py-32 bg-gray-900" ref={ref}>
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={HomeStatsImg}
          alt="Engineering background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-10"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl font-extrabold text-white sm:text-4xl"
            variants={textVariants}
          >
            Our Engineering Excellence
          </motion.h2>
          <motion.p 
            className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4"
            variants={textVariants}
          >
            Delivering innovative solutions and exceptional results for over a decade.
          </motion.p>
        </motion.div>
        <motion.dl
          className="grid grid-cols-2 gap-5 sm:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.text}
              className="px-4 py-5 bg-gray-800 shadow rounded-lg overflow-hidden sm:p-6"
              variants={itemVariants}
            >
              <dt className="text-sm font-medium text-gray-400 truncate">
                {stat.text}
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-yellow-500">
                {stat.number}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </div>
  )
}

export default HomeStats