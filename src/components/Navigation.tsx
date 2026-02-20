'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
     const [isOpen, setIsOpen] = useState(false);

     const navLinks = [
          { href: '/', label: 'Home' },
          { href: '/portfolio', label: 'Portfolio' },
          { href: '/services', label: 'Services' },
          { href: '/about', label: 'About' },
          { href: '/blog', label: 'Blog' },
          { href: '/contact', label: 'Contact' },
     ];

     return (
          <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                         <div className="flex items-center">
                              <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
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

                         <div className="flex items-center space-x-4">
                              <Link
                                   href="/contact"
                                   className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-primary rounded-full hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/25"
                              >
                                   Work with me
                              </Link>

                              {/* Mobile Hamburger */}
                              <button
                                   onClick={() => setIsOpen(!isOpen)}
                                   className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
                                   aria-label="Toggle menu"
                              >
                                   <div className="flex flex-col gap-1.5">
                                        <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                                        <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                                        <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                                   </div>
                              </button>
                         </div>
                    </div>
               </div>

               {/* Mobile Menu */}
               <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                         }`}
               >
                    <div className="glass border-t border-white/10 px-4 py-6 space-y-1">
                         {navLinks.map((link) => (
                              <Link
                                   key={link.href}
                                   href={link.href}
                                   onClick={() => setIsOpen(false)}
                                   className="block px-4 py-3 rounded-lg text-foreground/80 hover:text-primary hover:bg-white/10 transition-all font-medium"
                              >
                                   {link.label}
                              </Link>
                         ))}
                         <div className="pt-4 px-4">
                              <Link
                                   href="/contact"
                                   onClick={() => setIsOpen(false)}
                                   className="block w-full text-center px-5 py-3 text-sm font-medium text-white bg-primary rounded-full hover:bg-blue-600 transition-all shadow-lg"
                              >
                                   Work with me
                              </Link>
                         </div>
                    </div>
               </div>
          </nav>
     );
}
