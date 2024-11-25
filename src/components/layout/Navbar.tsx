'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

// Define navigation links
const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/blog', label: 'Blogs' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Function to determine if a link is active
  const isActive = (href: string) => pathname === href;

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-8 md:py-3 lg:px-16">
      <div className="container md:w-2/3 mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"  // Replace with your actual logo path
            alt="BeLight Logo"
            width={60}
            height={60}
            className="h-10 md:h-14 w-auto"
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="btn btn-ghost btn-square"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                text-base font-medium transition-all duration-300
                ${isActive(link.href)
                  ? 'text-primary underline underline-offset-4'
                  : 'text-base-content hover:text-primary'}
              `}
            >
              {link.label}
            </Link>
          ))}

          {/* Contact Button */}
          <Link
            href="/contact"
            className="btn bg-primary2 text-white btn-md rounded-md hover:bg-primary hover:text-slate-100"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full md:hidden z-50">
            <div className="bg-base-100 shadow-lg p-4">
              <div className="flex flex-col space-y-4 text-center">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`
                      text-base font-medium block py-2
                      ${isActive(link.href)
                        ? 'text-primary'
                        : 'text-base-content hover:text-primary'}
                    `}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Mobile Contact Button */}
                <Link
                  href="/contact"
                  className="btn bg-primary text-white btn-block rounded-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
