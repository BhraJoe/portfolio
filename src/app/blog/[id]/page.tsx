import Link from 'next/link';
import type { Metadata } from 'next';

type Props = {
     params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
     const { id } = await params;
     const postId = parseInt(id);
     const post = getPost(postId);

     if (!post) {
          return {
               title: 'Post Not Found | Atanga Joseph',
          };
     }

     return {
          title: `${post.title} | Atanga Joseph`,
          description: post.excerpt,
     };
}

function getPost(postId: number) {
     const blogPosts = [
          {
               id: 1,
               title: 'Building Scalable Web Applications with Next.js',
               excerpt: 'Learn how to build high-performance web applications using Next.js and modern development practices.',
               content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
               category: 'Development',
               date: '2024-01-15',
               readTime: '8 min read',
               gradient: 'from-blue-600 to-indigo-700',
          },
          {
               id: 2,
               title: 'The Future of Web Development in 2024',
               excerpt: 'Exploring the latest trends and technologies that are shaping the future of web development.',
               content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
               category: 'Technology',
               date: '2024-01-10',
               readTime: '6 min read',
               gradient: 'from-purple-600 to-fuchsia-700',
          },
          {
               id: 3,
               title: 'Best Practices for React Performance Optimization',
               excerpt: 'Tips and techniques to optimize your React applications for better performance and user experience.',
               content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
               category: 'Development',
               date: '2024-01-05',
               readTime: '10 min read',
               gradient: 'from-emerald-500 to-teal-600',
          },
          {
               id: 4,
               title: 'Why Your Business Needs a Professional Website',
               excerpt: 'Understanding the importance of having a professional online presence for your business growth.',
               content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
               category: 'Business',
               date: '2024-01-01',
               readTime: '5 min read',
               gradient: 'from-amber-500 to-orange-600',
          },
          {
               id: 5,
               title: 'Introduction to TypeScript for JavaScript Developers',
               excerpt: 'A beginner-friendly guide to TypeScript and its benefits for large-scale applications.',
               content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
               category: 'Development',
               date: '2023-12-20',
               readTime: '12 min read',
               gradient: 'from-rose-500 to-pink-600',
          },
          {
               id: 6,
               title: 'How to Choose the Right Web Development Stack',
               excerpt: 'Factors to consider when selecting the right technology stack for your next project.',
               content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
               category: 'Business',
               date: '2023-12-15',
               readTime: '7 min read',
               gradient: 'from-cyan-500 to-blue-600',
          },
     ];

     return blogPosts.find(post => post.id === postId);
}

export default async function BlogPost({ params }: Props) {
     const { id } = await params;
     const postId = parseInt(id);
     const post = getPost(postId);

     if (!post) {
          return (
               <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                         <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
                         <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
                         <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
                              ← Back to Blog
                         </Link>
                    </div>
               </div>
          );
     }

     return (
          <div className="min-h-screen">
               {/* Post Header */}
               <section className={`relative py-20 overflow-hidden bg-gradient-to-br ${post.gradient}`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                         <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-8 font-medium">
                              ← Back to Blog
                         </Link>
                         <div className="flex items-center gap-4 mb-6">
                              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                                   {post.category}
                              </span>
                              <span className="text-white/70 text-sm">{post.readTime}</span>
                         </div>
                         <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                              {post.title}
                         </h1>
                         <p className="text-white/80 text-lg">{post.date}</p>
                    </div>
               </section>

               {/* Post Content */}
               <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <article className="prose prose-lg max-w-none">
                         <p className="text-xl text-gray-600 leading-relaxed mb-8">{post.excerpt}</p>
                         <p className="text-gray-700 leading-relaxed mb-6">{post.content}</p>
                         <p className="text-gray-700 leading-relaxed mb-6">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                         </p>
                         <p className="text-gray-700 leading-relaxed mb-6">
                              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                         </p>
                    </article>

                    {/* Share Section */}
                    <div className="mt-16 pt-8 border-t border-gray-200">
                         <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this post</h3>
                         <div className="flex gap-4">
                              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                   Twitter
                              </button>
                              <button className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors">
                                   Facebook
                              </button>
                              <button className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                                   LinkedIn
                              </button>
                         </div>
                    </div>
               </section>
          </div>
     );
}
