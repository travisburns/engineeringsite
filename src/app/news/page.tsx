import Link from 'next/link';
import NewsData from './NewsData/NewsData';
import Image from 'next/image';

export default function NewsPage() {
  return (
    <div className="bg-gray-900 mx-auto px-8 sm:px-12 lg:px-16 py-28">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {NewsData.map((news) => (
          <div key={news.id} className="bg-white shadow-lg rounded-lg p-6">
            <Image src={news.img} alt={news.SEOTitle} width={500} height={300} className="mb-4 w-full h-auto rounded-lg" />
            <h2 className="text-xl font-semibold mb-2">{news.SEOTitle}</h2>
            <p className="text-gray-600 mb-4">{news.date}</p>
            <Link href={`/news/${news.id}`} className="text-blue-500 hover:underline">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}