import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata = {
  title: "Luxury Interior Design Dubai - Premier Fit-Out Experts in UAE",
  description:
    "Transform your spaces with our premium interior design and fit-out services in Dubai. Contact our expert team for a consultation today!",
  canonicalUrl: "https://www.wedointerior.ae/", // Replace with your actual domain
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Canonical Tag */}
        <link rel="canonical" href={metadata.canonicalUrl} />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

