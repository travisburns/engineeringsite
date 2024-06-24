'use client'
import Image from 'next/image'
import HomeNewsData from '@/app/constants/HomeNewsData/HomeNewsData'

const HomeNews = () => {
  return (
    <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className='text-white font-playfair text-3xl md:text-4xl lg:text-5xl mb-12 text-center'>Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HomeNewsData.map((story, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src={story.picture}
                  alt={story.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-playfair text-white mb-4">{story.title}</h3>
                <p className="text-gray-300 mb-6">{story.text}</p>
                <button className="w-full bg-yellow-500 text-gray-900 font-playfair py-2 px-4 rounded hover:bg-yellow-600 transition duration-300">
                  {story.btntext}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeNews