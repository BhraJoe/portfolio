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
               <div className={`relative z-[110] bg-white/95 border-b border-gray-200 transition-all ${isOpen ? 'bg-white' : 'backdrop-blur-md'}`}>
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
                                             className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
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
                                        className="md:hidden relative w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                                        aria-label="Toggle menu"
                                   >
                                        <div className="flex flex-col gap-1.5 w-6">
                                             <span className={`block h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : 'w-full'}`} />
                                             <span className={`block h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-full'}`} />
                                             <span className={`block h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : 'w-2/3 ml-auto'}`} />
                                        </div>
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>

               {/* Redesigned Fullscreen Mobile Menu Overlay */}
               <div
                    className={`fixed inset-0 bg-white z-[105] md:hidden transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
                         }`}
               >
                    <div className="flex flex-col h-full h-screen w-screen px-8 pt-32 pb-12 overflow-y-auto">
                         <div className="flex flex-col space-y-6">
                              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Navigation</div>
                              {navLinks.map((link, index) => (
                                   <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        style={{ transitionDelay: isOpen ? `${index * 50 + 100}ms` : '0ms' }}
                                        className={`text-4xl font-bold text-gray-900 hover:text-primary transition-all duration-500 transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                                   >
                                        {link.label}
                                   </Link>
                              ))}
                         </div>

                         <div className="mt-auto space-y-12">
                              <div>
                                   <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Contact & Social</div>
                                   <div className="flex flex-col space-y-4">
                                        <a href="mailto:contact@atangajoseph.com" className="text-xl font-medium text-gray-800 hover:text-primary transition-colors">
                                             contact@atangajoseph.com
                                        </a>
                                        <div className="flex gap-6">
                                             {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                                                  <a
                                                       key={social}
                                                       href="#"
                                                       className="text-sm font-semibold text-gray-500 hover:text-primary transition-colors"
                                                  >
                                                       {social}
                                                  </a>
                                             ))}
                                        </div>
                                   </div>
                              </div>

                              <Link
                                   href="/contact"
                                   onClick={() => setIsOpen(false)}
                                   className="block w-full text-center px-8 py-5 text-lg font-bold text-white bg-primary rounded-2xl hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20"
                              >
                                   Start a Project
                              </Link>
                         </div>
                    </div>
               </div>
          </nav>
     );
}
