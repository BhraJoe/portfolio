import Link from 'next/link';

export default function Footer() {
     return (
          <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                         <div className="col-span-1 md:col-span-1">
                              <Link href="/" className="text-2xl font-bold text-white mb-6 block">Atanga Joseph</Link>
                              <p className="text-slate-400 mb-6 leading-relaxed">
                                   Professional Web & Software Developer crafting digital experiences that perform.
                              </p>
                              <div className="flex space-x-4">
                                   <a href="#" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full">Twitter</a>
                                   <a href="#" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full">LinkedIn</a>
                                   <a href="#" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full">Instagram</a>
                              </div>
                         </div>

                         <div>
                              <h4 className="text-lg font-semibold mb-6 text-slate-200">Quick Links</h4>
                              <ul className="space-y-4">
                                   <li><Link href="/portfolio" className="text-slate-400 hover:text-blue-400 transition-colors">Portfolio</Link></li>
                                   <li><Link href="/services" className="text-slate-400 hover:text-blue-400 transition-colors">Services</Link></li>
                                   <li><Link href="/about" className="text-slate-400 hover:text-blue-400 transition-colors">About</Link></li>
                                   <li><Link href="/blog" className="text-slate-400 hover:text-blue-400 transition-colors">Blog</Link></li>
                                   <li><Link href="/contact" className="text-slate-400 hover:text-blue-400 transition-colors">Contact</Link></li>
                              </ul>
                         </div>

                         <div>
                              <h4 className="text-lg font-semibold mb-6 text-slate-200">Services</h4>
                              <ul className="space-y-4">
                                   <li><Link href="/services" className="text-slate-400 hover:text-blue-400 transition-colors">Website Development</Link></li>
                                   <li><Link href="/services" className="text-slate-400 hover:text-blue-400 transition-colors">Frontend Development</Link></li>
                                   <li><Link href="/services" className="text-slate-400 hover:text-blue-400 transition-colors">Backend Development</Link></li>
                                   <li><Link href="/services" className="text-slate-400 hover:text-blue-400 transition-colors">Full-Stack Applications</Link></li>
                              </ul>
                         </div>

                         <div>
                              <h4 className="text-lg font-semibold mb-6 text-slate-200">Contact</h4>
                              <p className="text-slate-400 mb-4">Ready to start? Reach out.</p>
                              <a href="mailto:hello@atangajoseph.com" className="text-xl font-medium text-white hover:text-blue-400 transition-colors">hello@atangajoseph.com</a>
                         </div>
                    </div>

                    <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
                         <p>&copy; {new Date().getFullYear()} Atanga Joseph. All rights reserved.</p>
                         <div className="flex gap-8">
                              <Link href="/privacy" className="hover:text-slate-400">Privacy Policy</Link>
                              <Link href="/terms" className="hover:text-slate-400">Terms of Service</Link>
                         </div>
                    </div>
               </div>
          </footer>
     );
}
