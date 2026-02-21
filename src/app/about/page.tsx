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
    { value: '50+', label: 'Projects Completed', icon: '🚀' },
    { value: '30+', label: 'Happy Clients', icon: '😊' },
    { value: '5+', label: 'Years Experience', icon: '⭐' },
    { value: '99%', label: 'Client Satisfaction', icon: '💯' },
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
                            <p className="text-lg text-white md:text-gray-600 mb-6 leading-relaxed">
                                Hi, I&apos;m <strong>Atanga Joseph</strong> — a passionate web developer dedicated to building modern, fast, and scalable digital solutions. With years of experience, I specialize in creating responsive websites and applications that help businesses grow.
                            </p>
                            <p className="text-white md:text-gray-600 mb-8 leading-relaxed">
                                My approach combines technical expertise with creative problem-solving. I believe in building long-term relationships through transparent communication, reliable delivery, and exceptional code quality.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/portfolio" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1">
                                    View My Work
                                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                                </Link>
                                <Link href="/contact" className="inline-flex items-center px-6 py-3 glass text-foreground font-medium rounded-full hover:bg-white/80 transition-all hover:shadow-lg hover:-translate-y-1">
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
                            <div key={stat.label} className="text-center p-6 glass-card bg-white/60">
                                <div className="text-3xl mb-3">{stat.icon}</div>
                                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</h3>
                                <p className="text-gray-600 text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white md:text-gray-900 mb-4">Technical Skills</h2>
                    <p className="text-white md:text-gray-600">Technologies I work with to build exceptional digital products.</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="glass-card p-5 text-center bg-white/60 hover:bg-white/80 group"
                        >
                            <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">{skill.name}</h4>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Let&apos;s build something great together
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-xl mx-auto">
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
