"use client";
import { useParams } from 'next/navigation';
import NewsData, { News } from '../NewsData/NewsData';
import Image from 'next/image';

export default function NewsDetailPage() {
  const { slug } = useParams();
  const news = NewsData.find((news: News) => news.id === slug);

  if (!news) {
    return <div className="min-h-screen bg-gray-900 py-28 px-4 sm:px-6 lg:px-8 text-white">News not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-12 font-bold text-white">{news.SEOTitle}</h1>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <Image src={news.img} alt={news.SEOTitle} width={800} height={500} className="w-full h-auto rounded-lg" />
          </div>
          <div className="lg:w-1/2">
            <p className="text-gray-300 mb-4">{news.date}</p>
            <p className="text-lg text-gray-300 mb-4">{news.description}</p>
            {news.description2 && <p className="text-lg text-gray-300 mb-4">{news.description2}</p>}
            {news.description3 && <p className="text-lg text-gray-300 mb-4">{news.description3}</p>}
            {news.description4 && <p className="text-lg text-gray-300 mb-4">{news.description4}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}