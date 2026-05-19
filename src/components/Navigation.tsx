'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
     const [isOpen, setIsOpen] = useState(false);

     useEffect(() => {
          if (isOpen) {
               document.body.style.overflow = 'hidden';
          } else {
               document.body.style.overflow = 'unset';
          }
          return () => {
               document.body.style.overflow = 'unset';
          };
     }, [isOpen]);

     const navLinks = [
          { href: '/', label: 'Home' },
          { href: '/portfolio', label: 'Portfolio' },
          { href: '/services', label: 'Services' },
          { href: '/about', label: 'About' },
          { href: '/blog', label: 'Blog' },
          { href: '/contact', label: 'Contact' },
     ];

     return (
          <nav className="fixed top-0 left-0 right-0 z-[100]">
               {/* Main Header Bar */}
               <div className={`relative z-[110] bg-background/95 border-b border-border transition-all ${isOpen ? 'bg-card' : 'backdrop-blur-md'}`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <div className="flex justify-between items-center h-20">
                              <div className="flex items-center">
                                   <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                                        Atanga Joseph
                                   </Link>
                              </div>

                              {/* Desktop Nav */}
                              <div className="hidden md:flex items-center space-x-8">
                                   {navLinks.map((link) => (
                                        <Link
                                             key={link.href}
                                             href={link.href}
                                             className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                                        >
                                             {link.label}
                                        </Link>
                                   ))}
                              </div>

                              <div className="flex items-center gap-4">
                                   <Link
                                        href="/contact"
                                        className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-primary rounded-full hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/25"
                                   >
                                        Work with me
                                   </Link>

                                   {/* Mobile Hamburger toggle */}
                                   <button
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="md:hidden relative w-12 h-12 flex items-center justify-center rounded-full hover:bg-accent transition-colors z-[120]"
                                        aria-label="Toggle menu"
                                   >
                                        <div className="flex flex-col gap-1.5 w-6">
                                             <span className={`block h-0.5 bg-foreground transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : 'w-full'}`} />
                                             <span className={`block h-0.5 bg-foreground transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-full'}`} />
                                             <span className={`block h-0.5 bg-foreground transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : 'w-2/3 ml-auto'}`} />
                                        </div>
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>

               {/* Mobile Menu Backdrop */}
               <div 
                    className={`fixed inset-0 bg-foreground/10 backdrop-blur-md z-[104] md:hidden transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    onClick={() => setIsOpen(false)}
               />

               {/* Redesigned Floating Mobile Menu */}
               <div
                    className={`fixed top-24 left-4 right-4 glass-card shadow-2xl border-border/50 z-[105] md:hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] origin-top ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
                         }`}
               >
                    <div className="flex flex-col p-6 max-h-[calc(100vh-8rem)] overflow-y-auto">
                         <div className="grid grid-cols-2 gap-3 mb-6">
                              {navLinks.map((link, index) => (
                                   <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        style={{ transitionDelay: isOpen ? `${index * 50 + 100}ms` : '0ms' }}
                                        className={`flex flex-col items-center justify-center py-5 px-4 rounded-2xl bg-accent/40 hover:bg-primary/10 border border-transparent hover:border-primary/20 text-foreground font-semibold shadow-sm transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                                   >
                                        {link.label}
                                   </Link>
                              ))}
                         </div>

                         <div className="bg-accent/40 rounded-3xl p-5 space-y-5 mt-auto">
                              <div className="text-xs font-bold uppercase tracking-widest text-foreground/50 text-center">Let's Connect</div>
                              <div className="flex justify-center gap-4">
                                   {['Twitter', 'LinkedIn', 'GitHub'].map((social, index) => (
                                        <a
                                             key={social}
                                             href="#"
                                             style={{ transitionDelay: isOpen ? `${index * 50 + 300}ms` : '0ms' }}
                                             className={`w-12 h-12 rounded-full bg-background flex items-center justify-center text-foreground hover:text-primary hover:scale-110 shadow-sm transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                                        >
                                             {social[0]}
                                        </a>
                                   ))}
                              </div>
                              <Link
                                   href="/contact"
                                   onClick={() => setIsOpen(false)}
                                   style={{ transitionDelay: isOpen ? '450ms' : '0ms' }}
                                   className={`block w-full text-center px-6 py-4 text-sm font-bold text-primary-foreground bg-primary rounded-2xl hover:bg-blue-600 transition-all duration-500 transform shadow-lg shadow-blue-500/20 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                              >
                                   Start a Project
                              </Link>
                         </div>
                    </div>
               </div>
          </nav>
     );
}
