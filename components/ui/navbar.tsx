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
  { name: 'About', id: 'about' },
  { name: 'Demos', id: 'demos' },
  { name: 'Collaborations', id: 'collaborations' },
  { name: 'Representation', id: 'representation' },
  { name: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

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
          <Link href="/" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            <Image
              src="/images/CC.svg"
              alt="Caleb Caz Logo"
              width={80}
              height={80}
              className="h-auto w-10 dark:invert"
              priority
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className="group mt-1 flex flex-col gap-0.5 text-sm font-normal text-text-muted hover:text-text hover:font-semibold  transition-all duration-300 ease-out"
              >
                {link.name}
                <span className="expand-underline" />
              </a>
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
                        rotate: resolvedTheme === "dark" ? 0 : 90,
                        scale: resolvedTheme === "dark" ? 1 : 0,
                        opacity: resolvedTheme === "dark" ? 1 : 0
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Moon className="size-5" />
                    </motion.div>
                    <motion.div
                      initial={false}
                      animate={{ 
                        rotate: resolvedTheme === "dark" ? -90 : 0,
                        scale: resolvedTheme === "dark" ? 0 : 1,
                        opacity: resolvedTheme === "dark" ? 0 : 1
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
          <a 
            key={link.name} 
            href={`#${link.id}`}
            onClick={(e) => scrollToSection(e, link.id)}
            className="text-2xl font-medium text-text  transition-colors flex flex-col items-center group"
          >
            {link.name}
            <span className="expand-underline " />
          </a>
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
