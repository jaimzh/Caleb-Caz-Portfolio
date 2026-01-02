"use client";

import React from "react";
import { Send, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
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
            className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-text transition-colors placeholder:text-text/20"
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
            className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-text transition-colors placeholder:text-text/20"
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div className="space-y-2 relative">
        <label
          className="text-xs font-bold uppercase tracking-widest text-text-muted"
          htmlFor="project-type"
        >
          Project Type
        </label>
        <div className="relative group/select">
          <select
            id="project-type"
            className="w-full bg-transparent border-b border-border py-2 px-0 focus:outline-none focus:border-text transition-colors cursor-pointer appearance-none [&>option]:bg-bg [&>option]:text-text"
          >
            <option>Commercial</option>
            <option>Animation</option>
            <option>Narration</option>
            <option>Other</option>
          </select>
          <ChevronDown
            size={16}
            className="absolute right-0 bottom-2.5 text-text-muted group-hover/select:text-text transition-colors pointer-events-none"
          />
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
          className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-text transition-colors resize-none placeholder:text-text/20"
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
