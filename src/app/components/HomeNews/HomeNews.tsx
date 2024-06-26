'use client'
import Image from 'next/image'
import Link from 'next/link'
import NewsData from '@/app/news/NewsData/NewsData'

const HomeNews = () => {
  // Get the latest 3 news items
  const latestNews = NewsData.slice(0, 3)

  return (
    <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className='text-white font-playfair font-bold text-3xl md:text-4xl lg:text-5xl mb-12 text-center'>Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestNews.map((story) => (
            <div key={story.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image
                  src={story.img}
                  alt={story.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair text-white mb-2">{story.SEOTitle}</h3>
                <p className="text-gray-300 text-sm mb-4">{story.date}</p>
                <p className="text-gray-300 mb-6 line-clamp-3">{story.description}</p>
                <Link href={`/news/${story.id}`} className="inline-block bg-yellow-500 text-gray-900 font-playfair py-2 px-4 rounded hover:bg-yellow-600 transition duration-300">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/news" className="inline-block bg-yellow-500 text-gray-900 font-playfair py-3 px-8  hover:bg-yellow-600 transition duration-300">
            View More News
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeNews