import type { Metadata } from "next";
import { Doto, JetBrains_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import MicrosoftClarity from "@/providers/microsoft-clarity";
import Analytics from "@/providers/analytics";

const dotoFont = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
});

const jetbrainsMonoFont = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const instrumentSansFont = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SVG UI | Animated SVG Components",
  description:
    "SVG UI is a library of animated SVG components that are easy to use and customize. It is built with Tailwind CSS and React.",
  openGraph: {
    images: ["/banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          dotoFont.variable,
          jetbrainsMonoFont.variable,
          instrumentSansFont.variable,
          "antialiased dark instrument-sans"
        )}
      >
        <MicrosoftClarity />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
