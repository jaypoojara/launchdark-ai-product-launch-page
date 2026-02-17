import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import { AgentationProvider } from "@/components/AgentationProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LaunchDark — Ship Your AI Product",
  description:
    "The dark-mode landing page template built for AI product launches. Scroll animations, pricing toggles, testimonials, and everything you need to convert visitors into users.",
  keywords: [
    "AI landing page",
    "product launch template",
    "dark mode template",
    "Next.js template",
    "developer tools",
    "SaaS landing page",
  ],
  openGraph: {
    title: "LaunchDark — Ship Your AI Product",
    description:
      "The dark-mode landing page template built for AI product launches.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "LaunchDark — Ship Your AI Product",
    description:
      "The dark-mode landing page template built for AI product launches.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} dark`}>
      <body className="font-[family-name:var(--font-body)] antialiased bg-[var(--background)] text-[var(--foreground)]">
        {children}
        <AgentationProvider />
      </body>
    </html>
  );
}
