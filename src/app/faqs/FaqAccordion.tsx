'use client';
import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';
import { Faq } from './FaqsData';

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
        {isOpen ? (
          <MinusIcon className="w-5 h-5 text-yellow-500" />
        ) : (
          <PlusIcon className="w-5 h-5 text-yellow-500" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-300">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqAccordion;