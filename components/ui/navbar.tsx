"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useScrollTo } from "@/hooks/useScrollTo";

const NAV_LINKS = [
  { name: "About", id: "about" },
  { name: "Demos", id: "demos" },
  { name: "Collaborations", id: "collaborations" },
  { name: "Representation", id: "representation" },
  { name: "Equipment", id: "equipment" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { scrollToId } = useScrollTo();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    scrollToId(id, 80);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`navbar-header ${
          isScrolled ? "navbar-header-scrolled" : ""
        }`}
      >
        <div
          className={`navbar-inner2 ${
            isScrolled ? "navbar-inner-scrolled" : ""
          }`}
        >
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Image
              src="/images/CC-2.svg"
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
                onClick={(e) => handleNavClick(e, link.id)}
                className="group mt-1 flex flex-col gap-0.5 text-sm font-normal text-text-muted hover:text-text  transition-all duration-300 ease-out"
              >
                {link.name}
                <span className="expand-underline" />
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />

            <Button
              asChild
              variant="btn-caleb2"
              className="hidden md:inline-flex rounded-full px-5"
              onClick={() => {
                scrollToId("contact", 80);
              }}
            >
              <Link href="#">
                <span>Say hi</span>
              </Link>
            </Button>

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden text-text-muted hover:text-primary transition"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>
      {/* mobile  part*/}
      <div
        className={`fixed inset-0 z-60 bg-bg/95 transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center gap-8 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 text-text-muted hover:text-primary transition"
          aria-label="Close menu"
        >
          <X className="w-8 h-8" />
        </button>

        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            href={`#${link.id}`}
            onClick={(e) => handleNavClick(e, link.id)}
            className="text-2xl font-medium text-text transition-colors flex flex-col items-center group"
          >
            {link.name}
            <span className="expand-underline" />
          </a>
        ))}

        <div className="flex flex-col gap-4 mt-8 w-full px-8">
          <Button
            asChild
            variant="btn-caleb"
            className="w-full rounded-full h-12 text-lg"
            onClick={() => {
              setIsMenuOpen(false);
              scrollToId("contact", 80);
            }}
          >
            <Link href="#">Sign up</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
