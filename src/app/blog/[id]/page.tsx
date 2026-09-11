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
               content: 'Scalability is a critical concern for any web application that expects growth. In this article, we explore how Next.js provides powerful tools for building applications that can handle increasing traffic and data without compromising performance.\n\nWe start by examining the App Router and Server Components, which allow developers to ship less JavaScript to the client. By leveraging server-side rendering and incremental static regeneration, applications can serve fresh content while maintaining excellent load times.\n\nNext, we dive into API routes in Next.js, showing how to build robust backend endpoints within the same project. This eliminates the need for a separate backend service for many use cases, reducing complexity and deployment overhead.\n\nFinally, we cover caching strategies, database optimization with Prisma, and deployment patterns on Vercel that ensure your application scales gracefully from hundreds to millions of users.',
               category: 'Development',
               date: '2025-06-15',
               readTime: '8 min read',
               gradient: 'from-blue-600 to-indigo-700',
          },
          {
               id: 2,
               title: 'The Future of Web Development in 2025',
               excerpt: 'Exploring the latest trends and technologies that are shaping the future of web development.',
               content: 'The web development landscape continues to evolve at a rapid pace. In 2025, several key trends are defining how we build for the modern web.\n\nAI-assisted development has moved from novelty to necessity. Tools like GitHub Copilot and AI-powered code review are fundamentally changing developer productivity, enabling teams to ship faster while maintaining quality.\n\nServer Components and progressive enhancement are becoming the default paradigm. Instead of shipping entire JavaScript bundles, we now selectively hydrate only the interactive parts of a page, resulting in significantly better Core Web Vitals scores.\n\nTypeScript has become the standard rather than the choice, with the ecosystem almost universally adopting strict typing. This shift has dramatically reduced runtime errors and improved developer experience across the board.',
               category: 'Technology',
               date: '2025-06-10',
               readTime: '6 min read',
               gradient: 'from-purple-600 to-fuchsia-700',
          },
          {
               id: 3,
               title: 'Best Practices for React Performance Optimization',
               excerpt: 'Tips and techniques to optimize your React applications for better performance and user experience.',
               content: 'React performance optimization is about understanding what causes unnecessary re-renders and addressing them systematically. In this deep dive, we cover practical strategies that make a measurable difference.\n\nFirst, we examine React.memo, useMemo, and useCallback - when to use them and when they add more overhead than they prevent. The rule of thumb: optimize only when profiling tells you to.\n\nWe then explore component architecture patterns that naturally reduce re-renders, such as separating presentational and container components, and using context judiciously to avoid prop drilling without over-splitting state.\n\nFinally, we look at real-world case studies where these techniques reduced bundle sizes by 40% and improved Time to Interactive by 2x on production applications.',
               category: 'Development',
               date: '2025-06-05',
               readTime: '10 min read',
               gradient: 'from-emerald-500 to-teal-600',
          },
          {
               id: 4,
               title: 'Why Your Business Needs a Professional Website',
               excerpt: 'Understanding the importance of having a professional online presence for your business growth.',
               content: 'In todays digital-first economy, your website is often the first interaction potential customers have with your brand. A professional website is no longer optional - it is a fundamental business requirement.\n\nResearch shows that 75% of users judge a company credibility based on its website design. A well-crafted site builds trust, communicates your value proposition clearly, and guides visitors toward conversion.\n\nBeyond credibility, a professional website serves as a 24/7 salesperson. Through SEO-optimized content, intuitive navigation, and conversion-focused design, it generates qualified leads while you sleep.\n\nWe also examine how businesses that invested in professional web presence saw measurable ROI - from increased customer acquisition rates to reduced customer support inquiries through self-service documentation.',
               category: 'Business',
               date: '2025-06-01',
               readTime: '5 min read',
               gradient: 'from-amber-500 to-orange-600',
          },
          {
               id: 5,
               title: 'Introduction to TypeScript for JavaScript Developers',
               excerpt: 'A beginner-friendly guide to TypeScript and its benefits for large-scale applications.',
               content: 'If you are a JavaScript developer looking to improve code quality and developer experience, TypeScript is the single most impactful upgrade you can make.\n\nWe begin with the fundamentals: type annotations, interfaces, and type inference. You will learn how TypeScript catches errors at compile time that would otherwise become runtime bugs in production.\n\nFrom there, we explore generics, utility types, and module resolution - the features that unlock TypeScript true power for large codebases. We show patterns for migrating existing JavaScript projects incrementally, so you can adopt TypeScript without a big-bang rewrite.\n\nBy the end of this guide, you will understand why TypeScript has become the industry standard and how it improves team collaboration through self-documenting code.',
               category: 'Development',
               date: '2025-05-20',
               readTime: '12 min read',
               gradient: 'from-rose-500 to-pink-600',
          },
          {
               id: 6,
               title: 'How to Choose the Right Web Development Stack',
               excerpt: 'Factors to consider when selecting the right technology stack for your next project.',
               content: 'Choosing a technology stack is one of the most consequential decisions in any web project. The right stack accelerates development; the wrong one creates technical debt from day one.\n\nWe start with a framework-agnostic analysis of your project requirements: team skills, expected scale, time-to-market pressure, and long-term maintenance budget. These factors should drive your decision, not trend-following.\n\nWe then compare popular stacks through the lens of real projects - when React plus Node.js makes sense, when a monolithic Next.js application is the smarter choice, and when specialized tools like Svelte or Django outperform the mainstream options.\n\nWe conclude with a decision framework you can apply to your next project, ensuring your technology choices align with business goals rather than developer preference alone.',
               category: 'Business',
               date: '2025-05-15',
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
                         <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
                         <p className="text-foreground/70 mb-8">The blog post you're looking for doesn't exist.</p>
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
                        <p className="text-xl text-foreground/70 leading-relaxed mb-8 whitespace-pre-line">{post.excerpt}</p>
                        <p className="text-foreground/80 leading-relaxed mb-6 whitespace-pre-line">{post.content}</p>
                    </article>

                    {/* Share Section */}
                    <div className="mt-16 pt-8 border-t border-border">
                         <h3 className="text-lg font-semibold text-foreground mb-4">Share this post</h3>
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
