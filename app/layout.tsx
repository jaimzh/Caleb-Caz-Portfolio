import type { Metadata } from "next";
import { Cedarville_Cursive, Inter, Montserrat, } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Spotlight } from "@/components/ui/spotlight";
import { flyWheel, myUglyFont } from "@/components/ui/fonts-loader";


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
        {/* <link
          rel="preload"
          href="/animations/Caleblogofile.lottie"
          as="fetch"
          type="application/octet-stream"
          crossOrigin="anonymous"
        /> */}

         <link
          rel="preload"
          href="/animations/Caleb logo round animated.svg"

           as="image"
          type="image/svg+xml"

          crossOrigin="anonymous"
        />
      </head>
      <body
        suppressHydrationWarning
        className={` ${montserrat.variable} ${cedarville.variable} ${myUglyFont.variable}  ${flyWheel.variable}  antialiased max-w-8xl m-auto px-6 pt-8 `} 
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
           
          >
            <Navbar />
        
            <main className="pt-24">{children}</main>
        </ThemeProvider>
        
      </body>
    </html>
  );
}
