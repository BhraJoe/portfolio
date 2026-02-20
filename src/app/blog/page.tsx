import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog | Atanga Joseph',
    description: 'Insights on web development, technology, and business from Atanga Joseph.',
};

function ArrowRightIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
        </svg>
    );
}

const blogPosts = [
    {
        id: 1,
        title: 'Building Scalable Web Applications with Next.js',
        excerpt: 'Learn how to build high-performance web applications using Next.js and modern development practices.',
        category: 'Development',
        date: '2024-01-15',
        readTime: '8 min read',
        gradient: 'from-blue-600 to-indigo-700',
    },
    {
        id: 2,
        title: 'The Future of Web Development in 2024',
        excerpt: 'Exploring the latest trends and technologies that are shaping the future of web development.',
        category: 'Technology',
        date: '2024-01-10',
        readTime: '6 min read',
        gradient: 'from-purple-600 to-fuchsia-700',
    },
    {
        id: 3,
        title: 'Best Practices for React Performance Optimization',
        excerpt: 'Tips and techniques to optimize your React applications for better performance and user experience.',
        category: 'Development',
        date: '2024-01-05',
        readTime: '10 min read',
        gradient: 'from-emerald-500 to-teal-600',
    },
    {
        id: 4,
        title: 'Why Your Business Needs a Professional Website',
        excerpt: 'Understanding the importance of having a professional online presence for your business growth.',
        category: 'Business',
        date: '2024-01-01',
        readTime: '5 min read',
        gradient: 'from-amber-500 to-orange-600',
    },
    {
        id: 5,
        title: 'Introduction to TypeScript for JavaScript Developers',
        excerpt: 'A beginner-friendly guide to TypeScript and its benefits for large-scale applications.',
        category: 'Development',
        date: '2023-12-20',
        readTime: '12 min read',
        gradient: 'from-rose-500 to-pink-600',
    },
    {
        id: 6,
        title: 'How to Choose the Right Web Development Stack',
        excerpt: 'Factors to consider when selecting the right technology stack for your next project.',
        category: 'Business',
        date: '2023-12-15',
        readTime: '7 min read',
        gradient: 'from-cyan-500 to-blue-600',
    },
];

export default function Blog() {
    return (
        <div className="min-h-screen">
            {/* Page Header */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-background">
                    <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full glass border border-blue-200/50 text-blue-600 text-sm font-medium">
                        Insights & Articles
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Blog</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Thoughts on web development, technology, and building digital products.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="glass-card group overflow-hidden bg-white/60">
                            <div className={`h-48 bg-gradient-to-br ${post.gradient} relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-white/30 text-7xl font-bold">{post.title.charAt(0)}</span>
                                </div>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                                        {post.category}
                                    </span>
                                    <span className="text-white/70 text-xs">{post.readTime}</span>
                                </div>
                            </div>
                            <div className="p-8">
                                <p className="text-xs text-gray-500 mb-3">{post.date}</p>
                                <h2 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors leading-snug">
                                    {post.title}
                                </h2>
                                <p className="text-gray-600 mb-6 leading-relaxed text-sm">{post.excerpt}</p>
                                <Link
                                    href={`/blog/${post.id}`}
                                    className="inline-flex items-center text-primary font-semibold hover:text-blue-700 group-hover:translate-x-1 transition-all text-sm"
                                >
                                    Read More <ArrowRightIcon className="inline h-4 w-4 ml-1" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-20 bg-accent/30">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Subscribe to My Newsletter
                    </h2>
                    <p className="text-gray-600 mb-10 max-w-xl mx-auto text-lg">
                        Get the latest articles and insights delivered directly to your inbox.
                    </p>
                    <form className="max-w-md mx-auto relative">
                        <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white rounded-full shadow-lg border border-gray-100">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-3 bg-transparent border-none focus:ring-0 text-gray-900 placeholder-gray-400 outline-none"
                            />
                            <button
                                type="submit"
                                className="px-8 py-3 bg-primary text-white font-medium rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}
