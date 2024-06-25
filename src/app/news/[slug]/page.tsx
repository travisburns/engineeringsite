"use client";

import { useParams } from 'next/navigation';
import NewsData, { News } from '../NewsData/NewsData';
import Image from 'next/image';

export default function NewsDetailPage() {
  const { slug } = useParams();
  const news = NewsData.find((news: News) => news.id === slug);

  if (!news) {
    return <div>News not found</div>;
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-white">{news.SEOTitle}</h1>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
          <Image src={news.img} alt={news.SEOTitle} width={800} height={500} className="w-full h-auto rounded-lg" />
        </div>
        <div className="lg:w-1/2">
          <p className="text-gray-600 mb-4">{news.date}</p>
          <p className="text-lg text-white mb-4">{news.description}</p>
          {news.description2 && <p className="text-lg text-white mb-4">{news.description2}</p>}
          {news.description3 && <p className="text-lg text-white mb-4">{news.description3}</p>}
          {news.description4 && <p className="text-lg text-white mb-4">{news.description4}</p>}
        </div>
      </div>
    </div>
  );
}