'use client';

import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';
import { Faq } from './FaqsData';
import { motion, AnimatePresence } from 'framer-motion';

const FaqAccordion: React.FC<Faq> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-700">
      <button
        className="flex justify-between items-center w-full py-4 text-left text-white font-semibold focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className="text-lg">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <MinusIcon className="w-5 h-5 text-yellow-500" />
          ) : (
            <PlusIcon className="w-5 h-5 text-yellow-500" />
          )}
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="pb-4 text-gray-300"
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqAccordion;