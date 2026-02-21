import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Services | Atanga Joseph',
    description: 'Professional web development services including website development, frontend architecture, backend systems, and full-stack applications.',
};

function CheckIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M20 6 9 17l-5-5" />
        </svg>
    );
}

function ArrowRightIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
        </svg>
    );
}

const services = [
    {
        title: 'Website Development',
        description: 'Custom websites tailored to your business needs. Modern, fast, and SEO-friendly.',
        benefits: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Custom Branding'],
        icon: '🌐',
        gradient: 'from-blue-500 to-indigo-600',
    },
    {
        title: 'Frontend Development',
        description: 'Build interactive and responsive user interfaces that engage your customers.',
        benefits: ['React/Next.js', 'Responsive Layouts', 'Interactive Animations', 'Accessibility'],
        icon: '🎨',
        gradient: 'from-purple-500 to-fuchsia-600',
    },
    {
        title: 'Backend Development',
        description: 'Robust server-side applications and APIs to power your digital products.',
        benefits: ['RESTful APIs', 'Database Design', 'Authentication', 'Cloud Deployment'],
        icon: '⚙️',
        gradient: 'from-emerald-500 to-teal-600',
    },
    {
        title: 'Full-Stack Applications',
        description: 'End-to-end web solutions from concept to deployment and beyond.',
        benefits: ['MERN Stack', 'Next.js Full-Stack', 'Real-time Features', 'Scalable Architecture'],
        icon: '🚀',
        gradient: 'from-amber-500 to-orange-600',
    },
    {
        title: 'Website Maintenance',
        description: 'Ongoing support to keep your website running smoothly and securely.',
        benefits: ['Security Updates', 'Performance Optimization', 'Content Updates', 'Technical Support'],
        icon: '🛡️',
        gradient: 'from-rose-500 to-pink-600',
    },
    {
        title: 'E-commerce Solutions',
        description: 'Online stores that drive sales and provide excellent shopping experiences.',
        benefits: ['Payment Integration', 'Inventory Management', 'User Dashboard', 'Mobile Optimized'],
        icon: '🛒',
        gradient: 'from-cyan-500 to-blue-600',
    },
];

const process = [
    { step: '01', title: 'Discovery', description: 'We discuss your goals, target audience, and project requirements.' },
    { step: '02', title: 'Planning', description: 'I create detailed wireframes, user flows, and a technical architecture.' },
    { step: '03', title: 'Development', description: 'Building your project with clean code, best practices, and regular updates.' },
    { step: '04', title: 'Launch & Support', description: 'Deploying your project and providing ongoing maintenance and support.' },
];

export default function Services() {
    return (
        <div className="min-h-screen">
            {/* Page Header */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-background">
                    <div className="absolute top-0 left-1/3 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full glass border border-emerald-200/50 text-emerald-600 text-sm font-medium">
                        What I Do
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                        Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Solutions</span>
                    </h1>
                    <p className="text-xl text-white md:text-gray-600 max-w-2xl mx-auto">
                        Professional web development services tailored to transform your business and elevate your digital presence.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div key={service.title} className="glass-card p-8 bg-white/60 group">
                            <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 text-2xl shadow-lg`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white md:text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-white md:text-gray-600 mb-6 leading-relaxed text-sm">{service.description}</p>
                            <ul className="space-y-3 mb-8">
                                {service.benefits.map((benefit) => (
                                    <li key={benefit} className="flex items-center text-white md:text-gray-600 text-sm">
                                        <CheckIcon className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/contact"
                                className="inline-flex items-center w-full justify-center px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg text-sm"
                            >
                                Get Started
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Process */}
            <section className="py-24 bg-accent/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white md:text-gray-900 mb-4">My Process</h2>
                        <p className="text-white md:text-gray-600 max-w-xl mx-auto">A streamlined approach to turning your ideas into reality.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {process.map((item) => (
                            <div key={item.step} className="text-center p-8 glass-card bg-white/60">
                                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
                                    {item.step}
                                </div>
                                <h3 className="text-lg font-bold text-white md:text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-white md:text-gray-600 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white md:text-gray-900 mb-6">
                        Ready to start your project?
                    </h2>
                    <p className="text-xl text-white md:text-gray-600 mb-10 max-w-xl mx-auto">
                        Let&apos;s discuss how I can help bring your vision to life with clean, performant code.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
                    >
                        Get in Touch
                        <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
