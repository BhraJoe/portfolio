import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About | Atanga Joseph',
    description: 'Learn more about Atanga Joseph — a passionate web developer with 5+ years of experience building modern digital solutions.',
};

const skills = [
    { name: 'React', level: 95 },
    { name: 'Next.js', level: 92 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js', level: 88 },
    { name: 'Express', level: 85 },
    { name: 'MongoDB', level: 82 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'JavaScript', level: 95 },
    { name: 'Python', level: 75 },
    { name: 'Git', level: 90 },
    { name: 'AWS', level: 70 },
];

const stats = [
    { value: '50+', label: 'Projects Completed', icon: 'rocket' },
    { value: '30+', label: 'Happy Clients', icon: 'users' },
    { value: '5+', label: 'Years Experience', icon: 'star' },
    { value: '99%', label: 'Client Satisfaction', icon: 'badge' },
];

function ArrowRightIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
        </svg>
    );
}

export default function About() {
    return (
        <div className="min-h-screen">
            {/* Page Header */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-background">
                    <div className="absolute top-10 left-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-block mb-4 px-4 py-1.5 rounded-full glass border border-purple-200/50 text-purple-600 text-sm font-medium">
                                About Me
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                                Crafting the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">future</span> of web.
                            </h1>
                            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                                Hi, I&apos;m <strong>Atanga Joseph</strong> — a passionate web developer dedicated to building modern, fast, and scalable digital solutions. With years of experience, I specialize in creating responsive websites and applications that help businesses grow.
                            </p>
                            <p className="text-foreground/80 mb-8 leading-relaxed">
                                My approach combines technical expertise with creative problem-solving. I believe in building long-term relationships through transparent communication, reliable delivery, and exceptional code quality.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/portfolio" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1">
                                    View My Work
                                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                                </Link>
                                <Link href="/contact" className="inline-flex items-center px-6 py-3 glass text-foreground font-medium rounded-full hover:bg-card/80 transition-all hover:shadow-lg hover:-translate-y-1">
                                    Get In Touch
                                </Link>
                            </div>
                        </div>

                        {/* Experience Visual */}
                        <div className="relative">
                            <div className="glass-card p-12 text-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 border-0">
                                <p className="text-7xl font-bold text-white mb-2">5+</p>
                                <p className="text-xl text-blue-100 font-medium">Years of Experience</p>
                                <div className="mt-8 grid grid-cols-2 gap-6 text-white/80">
                                    <div>
                                        <p className="text-3xl font-bold text-white">50+</p>
                                        <p className="text-sm">Projects</p>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold text-white">30+</p>
                                        <p className="text-sm">Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-accent/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center p-6 glass-card bg-card/60">
                                <div className="flex justify-center mb-3">
                                    {stat.icon === 'rocket' && (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
                                    )}
                                    {stat.icon === 'users' && (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                                    )}
                                    {stat.icon === 'star' && (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                    )}
                                    {stat.icon === 'badge' && (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>
                                    )}
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</h3>
                                <p className="text-foreground/80 text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
                    <p className="text-foreground/80">Technologies I work with to build exceptional digital products.</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="glass-card p-5 text-center bg-card/60 hover:bg-card/80 group"
                        >
                            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{skill.name}</h4>
                            <div className="mt-3 w-full bg-gray-200 rounded-full h-1.5">
                                <div
                                    className="bg-gradient-to-r from-blue-500 to-indigo-600 h-1.5 rounded-full transition-all duration-500"
                                    style={{ width: `${skill.level}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-accent/30">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                        Let&apos;s build something great together
                    </h2>
                    <p className="text-xl text-foreground/80 mb-10 max-w-xl mx-auto">
                        I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
                    >
                        Start a Conversation
                        <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
