"use client";

import React from "react";
import Image from "next/image";
import { Globe, Phone, User, ExternalLink } from "lucide-react";
import { Agency } from "./data";
import { motion } from "framer-motion";

interface RepresentationCardProps {
  agency: Agency;
  classname?: string;
}

export function RepresentationCard({
  agency,
  classname,
}: RepresentationCardProps) {
  return (
    <div className="caleb-card group flex flex-col items-center text-center p-8 h-full">
      {/* Visual Header - Agency Logo */}
      <div className="relative overflow-hidden w-24 h-24 mb-6 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center rounded-3xl">
        <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 border border-border rounded-3xl -z-10 shadow-xs overflow-hidden" />
        <div className="relative w-20 h-20">
          {agency.logo ? (
            <Image
              src={agency.logo}
              alt={agency.name}
              fill
              className={`object-contain ${classname}`}
              unoptimized
              priority
            />
          ) : (
            <span className="text-2xl font-bold text-gray-400">
              {agency.name.charAt(0)}
            </span>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold mb-4">{agency.name}</h3>

      <div className="space-y-4 text-sm text-text-muted mb-8 w-full grow flex flex-col justify-center">
        <div className="flex items-center justify-center gap-3">
          <Globe size={16} className="text-primary/60" />
          <span>{agency.location}</span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Phone size={16} className="text-primary/60" />
          <span>{agency.phone}</span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <User size={16} className="text-primary/60" />
          <span>{agency.agent}</span>
        </div>
      </div>

      <a
        href={agency.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group/link flex items-center gap-2 text-sm font-semibold text-text hover:text-primary transition-colors border-b-2 border-primary/20 hover:border-primary py-1"
      >
        Visit Website
        <ExternalLink
          size={14}
          className="opacity-0 group-hover/link:opacity-100 transition-opacity"
        />
      </a>
    </div>
  );
}
