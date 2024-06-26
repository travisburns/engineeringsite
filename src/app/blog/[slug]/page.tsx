"use client"
import { useParams } from 'next/navigation';
import { BlogPost, BlogData } from '../Blogdata';
import Image from 'next/image';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const blogPost = BlogData.find((post: BlogPost) => post.id === slug);

  if (!blogPost) {
    return <div className="min-h-screen bg-gray-900 py-28 px-4 sm:px-6 lg:px-8 text-white">Blog post not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-12 font-bold text-white">{blogPost.SEOTitle}</h1>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <Image src={blogPost.img} alt={blogPost.SEOTitle} width={800} height={500} className="w-full h-auto rounded-lg" />
          </div>
          <div className="lg:w-1/2">
            <p className="text-gray-300 mb-4">{blogPost.date}</p>
            <div className="text-lg text-gray-300 mb-4">
              {Object.keys(blogPost)
                .filter((key) => key.startsWith('description'))
                .map((key) => (
                  <p key={key} className="mb-4">
                    {blogPost[key as keyof BlogPost]}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}