"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu, X } from "lucide-react";

// --- Configuration ---
const NAV_LINKS = [
  { name: 'About', path: '/products' },
  { name: 'Demos', path: '/customer-stories' },
  { name: 'Collaboration', path: '/pricing' },
  { name: 'Contact', path: '/docs' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Handle mount
  useEffect(() => {
    setMounted(true);
  }, []);

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
          <Link href="/">
            <Image
              src="/images/cc.svg"
              alt="Caleb Caz Logo"
              width={80}
              height={80}
              className="h-auto w-10 dark:invert"
              priority
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
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="size-8 flex items-center justify-center hover:bg-bg-dark transition border border-text-muted rounded-md text-text cursor-pointer"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </button>
            <Button asChild variant="caleb-slide" className="hidden md:inline-flex rounded-full px-5">
              <Link href="#"><span>Sign up</span></Link>
            </Button>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden text-text-muted hover:text-primary transition"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-60 bg-bg-light transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center gap-8 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 text-text-muted hover:text-primary transition"
        >
          <X className="w-8 h-8" />
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

        <div className="flex flex-col gap-4 mt-8 w-full px-8">
            <Button 
                asChild 
                variant="caleb-slide"
                className="w-full rounded-full h-12 text-lg" 
                onClick={() => setIsMenuOpen(false)}
            >
              <Link href="#">Sign up</Link>
            </Button>
        </div>
      </div>
    </>
  );
}
