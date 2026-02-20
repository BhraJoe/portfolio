import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Portfolio | Atanga Joseph',
    description: 'Browse my portfolio of web development projects including e-commerce platforms, SaaS dashboards, and corporate websites.',
};

const projects = [
    {
        id: 1,
        title: 'E-commerce Platform',
        category: 'E-commerce',
        description: 'Modern online shopping experience with advanced cart, payment integration, and inventory management.',
        tech: ['React', 'Node.js', 'MongoDB'],
        gradient: 'from-blue-600 to-indigo-700',
        tagColor: 'bg-blue-100/50 text-blue-700',
        link: '#',
    },
    {
        id: 2,
        title: 'SaaS Dashboard',
        category: 'Web Apps',
        description: 'Analytics dashboard with real-time data visualization, reporting tools, and user management.',
        tech: ['Vue.js', 'Python', 'PostgreSQL'],
        gradient: 'from-purple-600 to-fuchsia-700',
        tagColor: 'bg-purple-100/50 text-purple-700',
        link: '#',
    },
    {
        id: 3,
        title: 'Corporate Website',
        category: 'Websites',
        description: 'Professional website with CMS integration, distinct typography, and smooth animations.',
        tech: ['Next.js', 'Strapi', 'Tailwind'],
        gradient: 'from-emerald-500 to-teal-600',
        tagColor: 'bg-emerald-100/50 text-emerald-700',
        link: 'https://professional-corporate-website.vercel.app/',
    },
    {
        id: 4,
        title: 'Real Estate Platform',
        category: 'E-commerce',
        description: 'Property listing platform with advanced search, virtual tours, and agent management.',
        tech: ['Next.js', 'Firebase', 'Stripe'],
        gradient: 'from-amber-500 to-orange-600',
        tagColor: 'bg-amber-100/50 text-amber-700',
        link: 'https://real-estate-red-two.vercel.app/',
    },
    {
        id: 5,
        title: 'Landing Page',
        category: 'Landing Pages',
        description: 'High-conversion landing page with A/B testing, analytics integration, and lead capture.',
        tech: ['React', 'Framer Motion', 'Tailwind'],
        gradient: 'from-rose-500 to-pink-600',
        tagColor: 'bg-rose-100/50 text-rose-700',
        link: 'https://landing-page-sigma-three-73.vercel.app/',
    },
    {
        id: 6,
        title: 'Mobile Banking App',
        category: 'Web Apps',
        description: 'Progressive web app for mobile banking with secure transactions and biometric auth.',
        tech: ['React Native', 'Node.js', 'PostgreSQL'],
        gradient: 'from-cyan-500 to-blue-600',
        tagColor: 'bg-cyan-100/50 text-cyan-700',
        link: '#',
    },
];

function ArrowRightIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
        </svg>
    );
}

export default function Portfolio() {
    return (
        <div className="min-h-screen">
            {/* Page Header */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-background">
                    <div className="absolute top-0 right-1/4 w-72 h-72 bg-indigo-500/15 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full glass border border-blue-200/50 text-blue-600 text-sm font-medium">
                        My Work
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Projects</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        A curated collection of projects showcasing my expertise in full-stack web development.
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="glass-card group overflow-hidden bg-white/60">
                            <div className={`h-56 bg-gradient-to-br ${project.gradient} relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                                <div className="absolute bottom-4 left-4">
                                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                                        {project.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6 text-xs font-medium">
                                    {project.tech.map((t) => (
                                        <span key={t} className={`px-3 py-1 rounded-full ${project.tagColor}`}>{t}</span>
                                    ))}
                                </div>
                                {project.link && project.link !== '#' ? (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-primary font-semibold hover:text-blue-700 group-hover:translate-x-1 transition-all text-sm"
                                    >
                                        View Project <ArrowRightIcon className="inline h-4 w-4 ml-1" />
                                    </a>
                                ) : (
                                    <span className="inline-flex items-center text-gray-400 cursor-not-allowed text-sm">
                                        View Project <ArrowRightIcon className="inline h-4 w-4 ml-1" />
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-accent/30">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Have a project in mind?
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-xl mx-auto">
                        Let&apos;s discuss how I can help bring your vision to life with clean code and stunning design.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
                    >
                        Start a Project
                        <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
