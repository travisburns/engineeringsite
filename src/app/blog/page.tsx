import Link from 'next/link';
import { BlogPost, BlogData } from './BlogData';
import Image from 'next/image';

const POSTS_PER_PAGE = 6;

export default function BlogPage({ searchParams }: { searchParams: { page?: string } }) {
  const page = parseInt(searchParams.page || '1');
  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;

  const blogPosts = BlogData.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post: BlogPost) => (
          <div key={post.id} className="bg-white shadow-lg rounded-lg p-6">
            <Image src={post.img} alt={post.SEOTitle} width={500} height={300} className="mb-4 w-full h-auto rounded-lg" />
            <p className="text-gray-600 mb-2">{post.date}</p>
            <Link href={`/blog/${post.id}`}>
              <h2 className="text-xl font-semibold mb-2 hover:text-blue-500 transition-colors duration-300">{post.SEOTitle}</h2>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        {page > 1 && (
          <Link href={`/blog?page=${page - 1}`} className="px-4 py-2 bg-gray-800 text-white rounded-lg mr-4">
            Previous
          </Link>
        )}
        {endIndex < BlogData.length && (
          <Link href={`/blog?page=${page + 1}`} className="px-4 py-2 bg-gray-800 text-white rounded-lg">
            Next
          </Link>
        )}
      </div>
    </div>
  );
}