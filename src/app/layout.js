import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "Interior Design Dubai - Luxury Interior Designers in UAE",
  description:
    "Best interior design company in Dubai. We Do Interior Design. We are offering professional services of Interior Design and fitout. Contact us today!",
  canonical: "https://www.wedointerior.ae/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Title and Meta Description */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Canonical Tag */}
        <link rel="canonical" href={metadata.canonical} />

        {/* Structured Data (Schema.org JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": metadata.title,
              "url": metadata.canonical,
              "description": metadata.description,
              "publisher": {
                "@type": "Organization",
                "name": "WeDo Interior",
                "url": metadata.canonical,
                "logo": "https://www.wedointerior.ae/logo.ico", // Replace with your actual logo URL
              },
            }),
          }}
        />
      </Head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}