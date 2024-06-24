'use client'

import React from 'react'
import Image from 'next/image'
import HomeStatsImg from './homestats.png'

const stats = [
  { number: '10+', text: 'Years Experience' },
  { number: '50+', text: 'Completed Projects' },
  { number: '25+', text: 'Industry Awards' },
  { number: '100%', text: 'Client Satisfaction' },
]

const HomeStats = () => {
  return (
    <div className="relative py-16 sm:py-24 lg:py-32 bg-gray-900">
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
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Our Engineering Excellence
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4">
            Delivering innovative solutions and exceptional results for over a decade.
          </p>
        </div>
        <dl className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.text} className="px-4 py-5 bg-gray-800 shadow rounded-lg overflow-hidden sm:p-6">
              <dt className="text-sm font-medium text-gray-400 truncate">
                {stat.text}
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-yellow-500">
                {stat.number}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default HomeStats