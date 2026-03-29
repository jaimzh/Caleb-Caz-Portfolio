import type { Metadata } from "next";
import { Cedarville_Cursive, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { flyWheel, myUglyFont } from "@/components/ui/fonts-loader";
import JsonLd from "@/components/seo/json-ld";
import { Analytics } from "@vercel/analytics/next"

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
  metadataBase: new URL("https://calebcaz.com"),
  title: {
    default: "Caleb Caz Voices",
    template: "%s | Caleb Caz Voices",
  },
  description:
    "Caleb Casamento is a professional voice actor specializing in audiobooks, commercials, video games, and animation. High-quality VO from a New York-based talent.",
  keywords: [
    "voice actor",
    "VO artist",
    "Caleb Casamento",
    "Caleb Caz",
    "audiobook narrator",
    "commercial voice",
    "video game voice",
    "animation voice talent",
  ],
  authors: [{ name: "Caleb Casamento" }],
  creator: "Caleb Casamento",
  publisher: "Caleb Casamento",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Caleb Caz Voices",
    description:
      "New York-based voice actor Caleb Casamento specializing in audiobooks, commercials, and video games.",
    url: "https://calebcaz.com",
    siteName: "Caleb Caz Voices",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Caleb Caz Voices - Professional Voice Actor",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Caleb Caz Voices",
    description:
      "New York-based voice actor Caleb Casamento specializing in audiobooks, commercials, and video games.",
    images: ["/images/og-image.png"],
  },
  verification: {
    google: "aNcwxSgzUwTYpkOs5KyWRsmsTtiXTrtKLBu0ZJj-DWQ",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
        <JsonLd />
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
