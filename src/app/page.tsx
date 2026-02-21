import Link from 'next/link';
import Image from 'next/image';

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function CodeIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

const featuredProjects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'E-commerce',
    description: 'Modern online shopping experience with advanced features and seamless checkout.',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: '/images/projects/ecommerce.png',
    tagColor: 'bg-blue-100/50 text-blue-700',
  },
  {
    id: 2,
    title: 'SaaS Dashboard',
    category: 'Web Apps',
    description: 'Analytics dashboard with real-time data visualization and reporting tools.',
    tech: ['Vue.js', 'Python', 'PostgreSQL'],
    image: '/images/projects/saas.png',
    tagColor: 'bg-purple-100/50 text-purple-700',
  },
  {
    id: 3,
    title: 'Corporate Website',
    category: 'Websites',
    description: 'Professional website with CMS integration, distinct typography, and animations.',
    tech: ['Next.js', 'Strapi', 'Tailwind'],
    image: '/images/projects/corporate.png',
    tagColor: 'bg-emerald-100/50 text-emerald-700',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 bg-background">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-indigo-500/20 rounded-full blur-3xl animate-pulse animate-delay-200" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-semibold animate-fade-in">
            Available for freelance projects
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 animate-fade-in animate-delay-100">
            Building digital <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">masterpieces</span>.
          </h1>
          <p className="text-xl text-gray-700 font-medium mb-10 max-w-2xl mx-auto animate-fade-in animate-delay-200">
            I transform complex problems into minimal, elegant, and high-performing web applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in animate-delay-300">
            <Link
              href="/portfolio"
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
            >
              View Portfolio
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 glass text-foreground font-medium rounded-full hover:bg-white/80 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-accent/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A selection of projects that showcase improved performance and user experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="glass-card group overflow-hidden bg-white/60 flex flex-col">
                <div className="h-64 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white md:text-gray-900 mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/80 md:text-gray-600 mb-6 leading-relaxed text-sm line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8 text-xs font-medium">
                    {project.tech.map((t) => (
                      <span key={t} className={`px-3 py-1 rounded-full ${project.tagColor}`}>{t}</span>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <Link
                      href={`/portfolio/${project.id === 1 ? 'ecommerce-platform' : project.id === 2 ? 'saas-dashboard' : 'corporate-website'}`}
                      className="inline-flex items-center text-primary font-semibold hover:text-blue-700 group-hover:translate-x-1 transition-all text-sm"
                    >
                      View Project <ArrowRightIcon className="inline h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/portfolio" className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 hover:text-primary transition-all">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Expertise</h2>
          <p className="text-gray-600">Comprehensive development and design solutions</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <CodeIcon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Web Development</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Custom websites built with modern technologies like React, Next.js, and TypeScript.</p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <BriefcaseIcon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Frontend Arch.</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Scalable frontend architecture with performance and accessibility in mind.</p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <GlobeIcon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Backend Systems</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Robust API development, database design, and server management.</p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <UsersIcon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Full-Stack Apps</h3>
            <p className="text-gray-600 text-sm leading-relaxed">End-to-end application development from concept to deployment.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">What people say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">S</div>
                <div>
                  <h4 className="font-bold text-gray-900">Sarah Chen</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Founder @ TechStart</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed italic">
                &quot;Bhra transformed our idea into a beautiful, functional product. His attention to detail and technical expertise are unmatched. The delivery was flawless.&quot;
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">M</div>
                <div>
                  <h4 className="font-bold text-gray-900">Michael Rodriguez</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">CEO @ ShopFlow</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed italic">
                &quot;Professional, reliable, and delivers exceptional results. Our new website has significantly increased our online sales and customer retention.&quot;
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">E</div>
                <div>
                  <h4 className="font-bold text-gray-900">Emily Watson</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Director @ CreativeGrowth</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed italic">
                &quot;Bhra&apos;s work exceeded our expectations. The website is fast, beautiful, and has helped us attract more clients. Highly recommended!&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to start your next project?
          </h3>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto text-lg">
            Get the latest insights on web development, design trends, and project case studies directly to your inbox.
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
