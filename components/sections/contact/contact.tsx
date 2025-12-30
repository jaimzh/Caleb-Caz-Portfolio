"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { SocialIcon } from "react-social-icons";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { ContactForm } from "./contact-form";

export default function Contact() {
  return (
    <section id="contact" className="w-full  py-6">
      <motion.div
        variants={staggerContainer(0.2)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Header - Always on top */}
        <motion.div variants={fadeIn("up")} className="mb-12 md:mb-16">
          <h2 className="mb-6">Let&apos;s work together.</h2>
          <p className="text-text-muted max-w-2xl">
            Ready to give your project a voice? Reach out for a quote, a custom
            audition, or just to say hello.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form - Shows first on mobile, right on desktop */}
          <motion.div variants={fadeIn("left")} className="order-1 md:order-2">
            <ContactForm />
          </motion.div>

          {/* Contact Info - Shows second on mobile, left on desktop */}
          <motion.div
            variants={fadeIn("right")}
            className="space-y-6 order-2 md:order-1"
          >
            <a
              href="tel:315-480-2245"
              className="flex items-center gap-4 text-xl font-medium text-text hover:text-primary transition-colors group w-fit"
            >
              <div className="p-3 rounded-2xl bg-bg-light border border-border group-hover:border-primary/30 transition-colors">
                <Phone size={24} className="text-primary" />
              </div>
              315-480-2245
            </a>

            <a
              href="mailto:calebcazvo@gmail.com"
              className="flex items-center gap-4 text-xl font-medium text-text hover:text-primary transition-colors group w-fit"
            >
              <div className="p-3 rounded-2xl bg-bg-light border border-border group-hover:border-primary/30 transition-colors">
                <Mail size={24} className="text-primary" />
              </div>
              calebcazvo@gmail.com
            </a>

            <div className="flex gap-4 pt-4">
              {[
                { url: "https://www.youtube.com/c/CalebCaz", label: "YouTube" },
                {
                  url: "https://www.instagram.com/calebcaz/",
                  label: "Instagram",
                },
                {
                  url: "https://www.tiktok.com/@jinglesunchained?lang=en",
                  label: "TikTok",
                },
                {
                  url: "https://www.facebook.com/JinglesUnchained",
                  label: "Facebook",
                },
              ].map((social, i) => (
                <div className="hover:scale-105 transition-transform" key={i}>
                  <SocialIcon
                  key={i}
                  url={social.url}
                  aria-label={social.label}
                  style={{ height: 32, width: 32 }}
                  bgColor= "var(--text)"
                  fgColor="var(--bg)"
                  className="mx-1"
                />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
