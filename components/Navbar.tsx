"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// --- Configuration ---
const NAV_LINKS = [
  { name: 'Products', path: '/products' },
  { name: 'Customer Stories', path: '/customer-stories' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Docs', path: '/docs' },
];

export default function Navbar() {
  // We can use Next.js hook for pathname if needed for active states
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "py-2" : "py-4 md:py-6"}`}>
        <div className={`flex items-center justify-between px-6 py-3 transition-all duration-300 max-w-5xl mx-auto w-full rounded-full border border-text ${isScrolled ? "bg-bg-light/80 backdrop-blur-md shadow-sm" : "bg-bg-light shadow"}`}>
          
          {/* Logo */}
          <Link href="https://prebuiltui.com">
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/prebuiltuiDummyLogo.svg"
              alt="Logo"
              className="h-8 w-auto"
            />
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.name} 
                href={link.path}
                className="group mt-1 flex flex-col gap-0.5 text-sm font-normal text-text-muted hover:text-text hover:font-semibold  transition-all duration-300 ease-out"
              >
                {link.name}
                {/* Underline Animation */}
                <span className="expand-underline" />
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <button className="size-8 flex items-center justify-center hover:bg-bg-dark transition border border-slate-300 rounded-md text-text">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 10.39a2.889 2.889 0 1 0 0-5.779 2.889 2.889 0 0 0 0 5.778M7.5 1v.722m0 11.556V14M1 7.5h.722m11.556 0h.723m-1.904-4.596-.511.51m-8.172 8.171-.51.511m-.001-9.192.51.51m8.173 8.171.51.511"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <Link
              className="hidden md:flex bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition"
              href="#"
            >
              Sign up
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden text-text-muted hover:text-primary transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-60 bg-white transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center gap-8 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 text-text-muted hover:text-primary transition"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {NAV_LINKS.map((link) => (
          <Link 
            key={link.name} 
            href={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-medium text-text hover:text-primary transition-colors flex flex-col items-center group"
          >
            {link.name}
            <span className="expand-underline mt-1" />
          </Link>
        ))}

        <div className="flex flex-col gap-4 mt-8">
            <Link
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition w-full text-center"
              onClick={() => setIsMenuOpen(false)}
              href="#"
            >
              Sign up
            </Link>
        </div>
      </div>
    </>
  );
}
