import Link from 'next/link';
import NewsData from './NewsData/NewsData';
import Image from 'next/image';

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-12 font-bold text-white">News</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {NewsData.map((news) => (
            <div key={news.id} className="bg-gray-800 shadow-lg rounded-lg p-6">
              <Image src={news.img} alt={news.SEOTitle} width={500} height={300} className="mb-4 w-full h-auto rounded-lg" />
              <h2 className="text-xl font-semibold mb-2 text-yellow-500">{news.SEOTitle}</h2>
              <p className="text-gray-300 mb-4">{news.date}</p>
              <Link href={`/news/${news.id}`} className="text-yellow-500 hover:underline">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}