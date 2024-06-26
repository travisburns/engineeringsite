'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import servicesData from '../../constants/ServicesData/ServicesData'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const HomeServices = () => {
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
    <section className='bg-gray-900 py-16 px-4 sm:px-6 lg:px-8' ref={ref}>
      <div className='max-w-7xl mx-auto'>
        <motion.h2 
          className='font-extrabold text-3xl md:text-4xl lg:text-5xl mb-12 text-white text-center'
          variants={headerVariants}
          initial="hidden"
          animate={controls}
        >
          Our Services
        </motion.h2>
        <motion.div 
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {servicesData.map((service, index) => (
            <motion.div 
              key={index} 
              className='bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105'
              variants={itemVariants}
            >
              <div className='relative h-48 sm:h-56 md:h-64'>
                <Link href={`/services/${service.id}`}>
                  <Image
                    src={service.img}
                    alt={service.title}
                    layout='fill'
                    objectFit='cover'
                  />
                </Link>
              </div>
              <div className='p-6'>
                <h3 className='font-playfair text-xl md:text-2xl font-semibold text-yellow-500 mb-2'>{service.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default HomeServices