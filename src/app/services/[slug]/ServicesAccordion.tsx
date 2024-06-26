import React, { useState } from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'

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
        <PlusIcon className={`w-6 h-6 text-yellow-500 transition-transform ${isOpen ? 'transform rotate-45' : ''}`} />
      </div>
      {isOpen && (
        <div className="accordion-content font-playfair text-gray-300 text-base bg-gray-700 p-4">
          {content.map((item, index) => (
            <p key={index} className="mb-2">{item}</p>
          ))}
        </div>
      )}
    </div>
  )
}

export default ServicesAccordion