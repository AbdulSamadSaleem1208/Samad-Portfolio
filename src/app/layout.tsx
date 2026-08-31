import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import { profile } from "@/data/profile";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abdulsamadsaleem.vercel.app"),
  title: {
    default: profile.seoTitle,
    template: "%s | Abdul Samad Saleem",
  },
  description: profile.seoDescription,
  keywords: [
    "Abdul Samad Saleem",
    "Business Development",
    "FinTech",
    "Sales Development",
    "Technology",
    "AI",
    "Client Acquisition",
    "FAST NUCES",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: profile.seoTitle,
    description: profile.seoDescription,
    type: "website",
    locale: "en_US",
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: profile.seoTitle,
    description: profile.seoDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: profile.email,
  telephone: profile.phoneDisplay,
  image: "https://abdulsamadsaleem.vercel.app/abdul-samad-saleem.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Islamabad",
    addressCountry: "PK",
  },
  alumniOf: "FAST NUCES — Islamabad",
  sameAs: [profile.linkedin, profile.github],
  url: "https://abdulsamadsaleem.vercel.app",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full font-sans`}
      suppressHydrationWarning
    >
      <body className={`${inter.className} min-h-full bg-bg text-ink antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
