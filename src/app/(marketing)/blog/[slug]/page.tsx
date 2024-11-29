import React from 'react';
import posts, { BlogPost } from './data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Facebook, Linkedin, Share2, Tag, Twitter, User } from 'lucide-react';
import Image from 'next/image';

async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
    return posts.find(blog => blog.slug === slug) || null;
}

type Params = Promise<{ slug: string }>;

export default async function BlogPostDetail({ params }: { params: Params }) {
    // Await params to resolve the Promise
    const resolvedParams = await params;
    const blog = await getBlogBySlug(resolvedParams.slug);

    if (!blog) {
        notFound();
    }

    return (
        <div className="pt-6 md:pt-12 min-h-screen bg-background">
            <article className="max-w-6xl mx-auto py-8 px-4">
                {/* Back Button */}
                <Link
                    href="/blog"
                    className="inline-flex items-center text-primary hover:text-primary-dark mb-8 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Blogs
                </Link>

                {/* Header Section */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-4 text-black">{blog.title}</h1>

                    {/* Meta Information */}
                    <div className="flex flex-wrap gap-6 text-primary-dark mb-6">
                        {blog.date && (
                            <span className="flex items-center">
                                <Calendar className="w-5 h-5 mr-2 text-primary" />
                                {blog.date}
                            </span>
                        )}

                        {blog.author && (
                            <span className="flex items-center">
                                <User className="w-5 h-5 mr-2 text-primary" />
                                {blog.author}
                            </span>
                        )}

                        {blog.readTime && (
                            <span className="flex items-center">
                                <Clock className="w-5 h-5 mr-2 text-primary" />
                                {blog.readTime}
                            </span>
                        )}

                        {blog.category && (
                            <span className="flex items-center">
                                <Tag className="w-5 h-5 mr-2 text-primary" />
                                <span className="px-3 py-1 bg-primary-light text-white rounded-full text-sm">
                                    {blog.category}
                                </span>
                            </span>
                        )}
                    </div>
                </div>

                {/* Featured Image */}
                <div className="relative w-full h-[600px] mb-8 overflow-hidden shadow-lg">
                    <Image
                        src={"/blog.png"}
                        alt={blog.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Main Description */}
                {blog.description && (
                    <div className="mb-12 text-lg text-black/80 leading-relaxed p-6 bg-surface rounded-lg border border-primary/10">
                        {blog.description}
                    </div>
                )}

                {/* Content Sections */}
                <div className="space-y-12">
                    {blog.contents.map((content, index) => (
                        <section key={index} className="prose max-w-none">
                            {content.title && (
                                <h2 className="text-2xl font-semibold mb-4 text-primary-dark">
                                    {content.title}
                                </h2>
                            )}
                            <div className="text-black/80 leading-relaxed whitespace-pre-line">
                                {content.description}
                            </div>
                        </section>
                    ))}
                </div>

                {/* Share Section */}
                <div className="mt-12 pt-8 border-t border-primary/10">
                    <div className="flex items-center gap-4">
                        <Share2 className="w-5 h-5 text-primary" />
                        <h3 className="text-lg font-semibold text-black">Share this article</h3>
                    </div>
                    <div className="mt-4 flex gap-4">
                        <button className="p-3 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors duration-200">
                            <Facebook className="w-5 h-5" />
                        </button>
                        <button className="p-3 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors duration-200">
                            <Twitter className="w-5 h-5" />
                        </button>
                        <button className="p-3 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors duration-200">
                            <Linkedin className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Related Articles Section (Optional) */}
                <div className="mt-16 pt-8 border-t border-primary/10">
                    <h3 className="text-2xl font-semibold text-black mb-6">Related Articles</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {posts.slice(0, 2).map((post) => (
                            <Link
                                key={post.id}
                                href={`/educational-resource/${post.slug}`}
                                className="group block bg-surface p-4 rounded-lg hover:shadow-md transition-shadow duration-200"
                            >
                                <h4 className="text-lg font-semibold text-primary group-hover:text-primary-dark mb-2">
                                    {post.title}
                                </h4>
                                <p className="text-black/60 line-clamp-2">{post.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </article>
        </div>
    );
}

// Optional: Generate static paths if you want to pre-render pages
export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}