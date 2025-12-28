"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { name: 'About', path: '/about' },
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

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`navbar-header ${isScrolled ? "navbar-header-scrolled" : ""}`}>
        <div className={`navbar-inner2 ${isScrolled ? "navbar-inner-scrolled" : ""}`}>
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
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.name} 
                href={link.path}
                className="group mt-1 flex flex-col gap-0.5 text-sm font-normal text-text-muted hover:text-text hover:font-semibold  transition-all duration-300 ease-out"
              >
                {link.name}

                <span className="expand-underline" />
              </Link>
            ))}
          </nav>


          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="size-9 flex items-center justify-center hover:bg-bg-dark transition-colors border border-text-muted rounded-full text-text cursor-pointer relative overflow-hidden"
              aria-label="Toggle theme"
            >
              <div className="relative size-5">
                {mounted ? (
                  <>
                    <motion.div
                      initial={false}
                      animate={{ 
                        rotate: theme === "dark" ? 0 : 90,
                        scale: theme === "dark" ? 1 : 0,
                        opacity: theme === "dark" ? 1 : 0
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Moon className="size-5" />
                    </motion.div>
                    <motion.div
                      initial={false}
                      animate={{ 
                        rotate: theme === "dark" ? -90 : 0,
                        scale: theme === "dark" ? 0 : 1,
                        opacity: theme === "dark" ? 0 : 1
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Sun className="size-5" />
                    </motion.div>
                  </>
                ) : (
                  <div className="size-5" />
                )}
              </div>
            </button>
            <Button asChild variant="caleb-slide" className="hidden md:inline-flex rounded-full px-5">
              <Link href="#"><span>Sign up</span></Link>
            </Button>
            

            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden text-text-muted hover:text-primary transition"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>
      

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
            className="text-2xl font-medium text-text  transition-colors flex flex-col items-center group"
          >
            {link.name}
            <span className="expand-underline " />
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
