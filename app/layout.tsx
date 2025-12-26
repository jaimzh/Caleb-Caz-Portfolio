import type { Metadata } from "next";
import { Inter, Montserrat, } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portflio website",
  description: "voice actor portfolio website for Caleb Caz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased max-w-5xl mx-auto px-6 pt-8`} 
      >
        <Navbar />
        <main className="pt-24">
          {children}
        </main>
        
      </body>
    </html>
  );
}
