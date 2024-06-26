'use client'
import Link from 'next/link'
import Image from 'next/image'
import headerImg from './headerimg.png'

const HomeHeader = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 lg:pr-8">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Engineered for</span>
              <span className="block text-yellow-400">Excellence</span>
            </h1>
            <p className="mt-3 text-xl text-gray-300 sm:mt-5 sm:max-w-xl">
              Dedicated To Building Long Lasting Relationships With Our Clients Through Exceptional Service And Uncompromising Quality.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:justify-start">
              <Link href='contact/contactUs'>
                <p className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-500 md:py-3 md:text-lg md:px-8 transition duration-300 ease-in-out transform hover:-translate-y-1">
                  Get in Touch
                </p>
              </Link>
              <Link href='services'>
                <p className="mt-3 sm:mt-0 sm:ml-3 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-yellow-400 bg-gray-800 hover:bg-gray-700 md:py-3 md:text-lg md:px-8 transition duration-300 ease-in-out transform hover:-translate-y-1">
                  Explore Services
                </p>
              </Link>
            </div>
          </div>
          <div className="w-full mt-8 lg:mt-0 lg:w-1/2">
            <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 w-full">
              <Image
                src={headerImg}
                alt="Engineering innovation"
                fill
                style={{
                  objectFit: "cover",
                  clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 100%)",
                }}
                className="rounded-lg shadow-2xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-gray-900/70 mix-blend-multiply rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </div>
  )
}

export default HomeHeader