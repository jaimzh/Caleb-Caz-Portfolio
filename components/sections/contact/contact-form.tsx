"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, ChevronDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const PROJECT_TYPES = ["Commercial", "Animation", "Narration", "Other"];

export function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("Commercial");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <form className="caleb-card space-y-6" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            className="text-xs font-bold uppercase tracking-widest text-text-muted"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-text transition-colors placeholder:text-text/20 font-medium"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label
            className="text-xs font-bold uppercase tracking-widest text-text-muted"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-text transition-colors placeholder:text-text/20 font-medium"
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div className="space-y-2 relative" ref={dropdownRef}>
        <label
          className="text-xs font-bold uppercase tracking-widest text-text-muted"
          htmlFor="project-type"
        >
          Project Type
        </label>
        <div className="relative group/select">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "w-full bg-bg-light/30 border border-border rounded-xl py-3 px-4 text-left flex items-center justify-between transition-all duration-300",
              "hover:border-text-muted focus:outline-none focus:border-text",
              isOpen ? "border-text shadow-sm" : "shadow-none",
            )}
          >
            <span className="text-sm font-medium text-text">
              {selectedType}
            </span>
            <ChevronDown
              size={18}
              className={cn(
                "text-text-muted transition-transform duration-300",
                isOpen && "rotate-180 text-text",
              )}
            />
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 8, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="absolute z-50 top-full left-0 w-full bg-bg-light border border-border rounded-xl shadow-xl overflow-hidden backdrop-blur-md"
              >
                <div className="p-1">
                  {PROJECT_TYPES.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => {
                        setSelectedType(type);
                        setIsOpen(false);
                      }}
                      className={cn(
                        "w-full px-4 py-2.5 text-sm text-left flex items-center justify-between rounded-lg transition-colors",
                        selectedType === type
                          ? "bg-text text-bg font-medium"
                          : "text-text-muted hover:bg-bg hover:text-text",
                      )}
                    >
                      {type}
                      {selectedType === type && <Check size={14} />}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="space-y-2">
        <label
          className="text-xs font-bold uppercase tracking-widest text-text-muted"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-text transition-colors resize-none placeholder:text-text/20 font-medium"
          placeholder="Tell me about your script..."
        />
      </div>

      <Button
        variant="caleb-slide"
        className="w-full sm:w-auto px-10 rounded-full group mt-4 h-12"
      >
        Send Message
        <Send
          size={18}
          className="translate-x-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ml-2"
        />
      </Button>
    </form>
  );
}
