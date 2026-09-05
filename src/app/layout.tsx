import type { Metadata, Viewport } from "next";
import { Geist, Outfit } from "next/font/google";
import { site } from "../config/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const title = `${site.shortName} · ${site.name}`;
const description = site.description;

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: `${title} · Nenagh`,
    template: `%s · ${site.shortName}`,
  },
  description,
  applicationName: site.name,
  keywords: [
    "Athletic Recovery Clinic",
    "ARC Nenagh",
    "sports massage Nenagh",
    "sports nutrition Nenagh",
    "cupping therapy",
    "compression boots",
    "TENS EMS",
    "Daniel Nolan",
  ],
  authors: [{ name: site.practitioner.name }],
  creator: site.practitioner.name,
  icons: {
    icon: [
      { url: "/logo-mark.png", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "en_IE",
    title: `${site.name} · Nenagh`,
    description,
    siteName: site.name,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · Nenagh`,
    description,
    images: ["/og.png"],
  },
  appleWebApp: {
    capable: true,
    title: site.shortName,
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#0E1F28",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: site.name,
  alternateName: site.shortName,
  description,
  email: site.email,
  telephone: "+353894025849",
  image: "/og.png",
  founder: {
    "@type": "Person",
    name: site.practitioner.name,
    jobTitle: site.practitioner.title,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nenagh",
    addressRegion: "Tipperary",
    addressCountry: "IE",
  },
  areaServed: "Nenagh",
  sameAs: [site.instagram, site.whatsapp],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IE"
      className={`${geistSans.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-arc-navy text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-arc-green focus:px-4 focus:py-2 focus:text-arc-void"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
