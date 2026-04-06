'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none" onClick={() => setMenuOpen(false)}>
          <span className="text-2xl font-bold tracking-tight text-navy" style={{ fontFamily: "'Playfair Display', serif" }}>
            AP TEXTILE
          </span>
          <span className="text-[11px] font-bold tracking-[0.3em] text-gold uppercase mt-1">
            Industries
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative pb-0.5 transition-colors duration-200 ${
                pathname === href
                  ? 'text-navy font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gold after:rounded-full'
                  : 'text-gray-500 hover:text-navy'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 px-4 py-2 bg-navy text-white text-sm font-semibold rounded hover:bg-navy-light transition-colors"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-navy transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-navy transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-navy transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium py-2 border-b border-gray-50 ${
                pathname === href ? 'text-navy font-semibold' : 'text-gray-600'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-4 py-2 bg-navy text-white text-sm font-semibold rounded text-center"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
