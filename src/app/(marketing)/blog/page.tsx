// components/BlogList.js
import { Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import posts, { BlogPost } from './[slug]/data'

export default function BlogList() {

  return (
    <div className="mx-auto px-4 py-8 md:px-20 md:py-20 md:my-10">
      <h1 className="text-3xl font-bold text-primary mb-6">Expert Tips & Trends</h1>
      <p className="text-lg text-primary3 mb-8">Explore our expert insights and practical strategies for building a strong online presence</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.map((post, index) => (
          <BlogCard key={index} post={post} index={index} />
        ))}
      </div>
    </div>
  );
};

function BlogCard({ post, index }: { post: BlogPost, index: number }) {
  return (
    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <Image
        src={post.image}
        alt={post.title}
        width={500}
        height={300}
        className="w-full object-cover h-48"
      />
      <div className="p-4">
        <div className="mb-2">
          <span className="mr-3 text-xs text-white bg-primary px-4 py-1 rounded-md shadow-md inline-flex items-center">
            {post.category}
          </span>
          <span className="mr-3 text-xs text-white bg-primary px-4 py-1 rounded-md shadow-md inline-flex items-center">
            {"Blog"}
          </span>
          <div className="flex items-center mt-2 text-secondary">
            <Calendar className="mr-1" size={14} />
            <span className='text-xs'>{post.date}</span>
          </div>
        </div>
        <Link href={'/blog/' + post.slug} className="text-lg font-semibold text-primary1 mb-2 hover:text-primary transition-transform transform hover:underline">
          {post.title}
        </Link>
        <p className="text-sm text-slate-500 mb-4 line-clamp-4">
          {post.description || "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim."}
        </p>
      </div>
    </div>
  );
}