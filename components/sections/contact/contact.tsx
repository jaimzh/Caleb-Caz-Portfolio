"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Twitter, Linkedin, Instagram } from "lucide-react";
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
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16"
      >
        {/* Left Side: Info */}
        <motion.div variants={fadeIn("right")} className="space-y-8">
          <div>
            <h2 className="mb-6">Let&apos;s work together.</h2>
            <p className="text-text-muted  max-w-md">
              Ready to give your project a voice? Reach out for a quote, a custom audition, or just to say hello.
            </p>
          </div>

          <div className="space-y-6">
            <a 
              href="mailto:caleb@calebkaz.com" 
              className="flex items-center gap-4 text-xl font-medium text-text hover:text-primary transition-colors group w-fit"
            >
              <div className="p-3 rounded-2xl bg-bg-light border border-border group-hover:border-primary/30 transition-colors">
                <Mail size={24} className="text-primary" />
              </div>
              caleb@calebkaz.com
            </a>
            
            <div className="flex gap-4 pt-4">
              {[
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="p-3 border border-border rounded-full hover:bg-text hover:text-bg hover:border-text transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div variants={fadeIn("left")}>
          <ContactForm />
        </motion.div>
      </motion.div>
    </section>
  );
}
