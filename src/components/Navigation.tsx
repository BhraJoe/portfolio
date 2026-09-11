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
               <div className="relative z-[110] bg-background/95 border-b border-border backdrop-blur-md">
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

               {/* Simple Mobile Menu */}
               <div
                    className={`fixed top-20 left-0 right-0 bg-background border-b border-border z-[105] md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0 max-h-96' : 'opacity-0 -translate-y-full max-h-0 pointer-events-none'}`}
               >
                    <div className="px-4 py-4 space-y-1">
                         {navLinks.map((link) => (
                              <Link
                                   key={link.href}
                                   href={link.href}
                                   onClick={() => setIsOpen(false)}
                                   className="block px-4 py-3 text-base font-medium text-foreground/80 hover:text-primary hover:bg-accent rounded-lg transition-colors"
                              >
                                   {link.label}
                              </Link>
                         ))}
                         <Link
                              href="/contact"
                              onClick={() => setIsOpen(false)}
                              className="block w-full text-center px-4 py-3 mt-2 text-base font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-blue-600 transition-colors"
                         >
                              Work with me
                         </Link>
                    </div>
               </div>
          </nav>
     );
}
