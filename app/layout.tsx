import type { Metadata } from "next";
import { Cedarville_Cursive, Inter, Montserrat, } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Spotlight } from "@/components/ui/spotlight";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cedarville = Cedarville_Cursive({
  variable: "--font-cedarville",
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio website",
  description: "voice actor portfolio website for Caleb Caz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/animations/Caleblogofile.lottie"
          as="fetch"
          type="application/octet-stream"
          crossOrigin="anonymous"
        />
      </head>
      <body
        suppressHydrationWarning
        className={` ${montserrat.variable} ${cedarville.variable} antialiased max-w-8xl m-auto px-6 pt-8 `} 
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
           
          >
            <Navbar />
            {/* <Spotlight but not for now  /> */}
            {/* <Spotlight /> */}
            <main className="pt-24">{children}</main>
        </ThemeProvider>
        
      </body>
    </html>
  );
}
