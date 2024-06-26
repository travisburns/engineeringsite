'use client'
import Link from 'next/link'
import Image from 'next/image'
import servicesData from '../../constants/ServicesData/ServicesData'

const HomeServices = () => {
  return (
    <section className=' bg-gray-900 py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='font-extrabold text-3xl md:text-4xl lg:text-5xl mb-12 text-white text-center'>Our Services</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {servicesData.map((service, index) => (
            <div key={index} className='bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105'>
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
                {/* <p className='text-gray-600'>{service.description}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeServices