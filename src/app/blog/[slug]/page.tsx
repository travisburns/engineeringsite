"use client"
import { useParams } from 'next/navigation';
import { BlogPost, BlogData } from '../Blogdata';
import Image from 'next/image';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const blogPost = BlogData.find((post: BlogPost) => post.id === slug);

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="bg-gray-900 mx-auto py-28">
      <h1 className="text-4xl font-bold mb-8 text-white">{blogPost.SEOTitle}</h1>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
          <Image src={blogPost.img} alt={blogPost.SEOTitle} width={800} height={500} className="w-full h-auto rounded-lg" />
        </div>
        <div className="lg:w-1/2">
          <p className="text-gray-600 mb-4">{blogPost.date}</p>
          <div className="text-lg text-white mb-4">
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
  );
}