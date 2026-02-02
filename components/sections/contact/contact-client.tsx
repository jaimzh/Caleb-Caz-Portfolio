"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { SocialIcon } from "react-social-icons";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { ContactForm } from "./contact-form";
import { AnimatedHeading } from "@/components/ui/animated-heading";

export interface ContactData {
  email?: string;
  phoneNumber?: string;
  socialMedia?: {
    youtube?: string;
    instagram?: string;
    tiktok?: string;
    facebook?: string;
  };
}

interface ContactClientProps {
  data: ContactData;
}

export default function ContactClient({ data }: ContactClientProps) {
  const socialLinks = [
    { url: data.socialMedia?.youtube, label: "YouTube" },
    { url: data.socialMedia?.instagram, label: "Instagram" },
    { url: data.socialMedia?.tiktok, label: "TikTok" },
    { url: data.socialMedia?.facebook, label: "Facebook" },
  ].filter((link) => link.url); // Only render social links that exist

  return (
    <section id="contact" className="w-full  py-6">
      <motion.div
        variants={staggerContainer(0.2)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <motion.div
          variants={fadeIn("up")}
          className="mb-12 md:mb-16 w-full flex flex-col items-center justify-centerr"
        >
          <AnimatedHeading heading="Contact" />
          <p className="text-text-muted max-w-2xl ">
            Ready to give your project a voice? Reach out for a quote, a custom
            audition, or just to say hello.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div variants={fadeIn("left")} className="order-1 md:order-2">
            <ContactForm />
          </motion.div>

          <motion.div
            variants={fadeIn("right")}
            className="space-y-6 order-2 md:order-1"
          >
            {data.phoneNumber && (
              <a
                href={`tel:${data.phoneNumber}`}
                className="flex items-center gap-4 text-xl font-medium text-text hover:text-primary transition-colors group w-fit"
              >
                <div className="p-3 rounded-2xl bg-bg-light border border-border group-hover:border-primary/30 transition-colors">
                  <Phone size={24} className="text-primary" />
                </div>
                {data.phoneNumber}
              </a>
            )}

            {data.email && (
              <a
                href={`mailto:${data.email}`}
                className="flex items-center gap-4 text-xl font-medium text-text hover:text-primary transition-colors group w-fit"
              >
                <div className="p-3 rounded-2xl bg-bg-light border border-border group-hover:border-primary/30 transition-colors">
                  <Mail size={24} className="text-primary" />
                </div>
                {data.email}
              </a>
            )}

            <div className="flex gap-4 pt-4">
              {socialLinks.map((social, i) => (
                <div className="hover:scale-105 transition-transform" key={i}>
                  <SocialIcon
                    key={i}
                    url={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    style={{ height: 32, width: 32 }}
                    bgColor="var(--text)"
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
