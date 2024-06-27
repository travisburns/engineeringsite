'use client';

import React, { useState } from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'
import { motion, AnimatePresence } from 'framer-motion'

interface ServicesAccordionProps {
  title: string
  content: string[]
  className?: string
}

const ServicesAccordion: React.FC<ServicesAccordionProps> = ({ title, content, className }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`accordion border-0 bg-gray-700 mb-4 ${className}`}>
      <div className="question flex items-center justify-between cursor-pointer p-4" onClick={toggleAccordion}>
        <span className="text-yellow-500 font-playfair text-lg">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <PlusIcon className="w-6 h-6 text-yellow-500" />
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="accordion-content font-playfair text-gray-300 text-base bg-gray-700 p-4"
          >
            {content.map((item, index) => (
              <p key={index} className="mb-2">{item}</p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ServicesAccordion