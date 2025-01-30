import "./globals.css";

export const metadata = {
  title: "Luxury Interior Design Dubai - Premier Fit-Out Experts in UAE",
  description:
    "Transform your spaces with our premium interior design and fit-out services in Dubai. Contact our expert team for a consultation today!",
  openGraph: {
    title: "Luxury Interior Design Dubai - Premier Fit-Out Experts in UAE",
    description: "Transform your spaces with our premium interior design and fit-out services in Dubai. Contact our expert team for a consultation today!",
    url: "https://wedointerior.ae/",
    type: "website",
    images: [
      {
        url: "https://wedointerior.ae/images/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Interior Design Dubai - WeDoInterior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Interior Design Dubai - Premier Fit-Out Experts in UAE",
    description: "Transform your spaces with our premium interior design and fit-out services in Dubai. Contact our expert team for a consultation today!",
    images: ["https://wedointerior.ae/images/preview.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Viewport meta tag for mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
      </head>
      <body>{children}</body>
    </html>
  );
}
