import "./globals.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://wedointerior.ae"),
  title: "Luxury Interior Design Dubai | High-End Fit-Out Experts UAE",
  description: "Experience opulence with our award-winning interior design and premium fit-out services in Dubai. Elevate your space—consult our experts today!",
  keywords: "luxury interior design, Dubai fit-out company, high-end interiors, UAE renovation experts",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.wedointerior.ae/",
  },
};

export default function RootLayout({ children }) {
  // JSON-LD Schema (Moved inside <head> for Google to read)
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://wedointerior.ae/#breadcrumblist",
        "itemListElement": [
          {
            "@type": "ListItem",
            "@id": "https://wedointerior.ae/#listItem",
            "position": 1,
            "name": "Home"
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://wedointerior.ae/#about-us",
        "name": "WeDo Interiors",
        "url": "https://wedointerior.ae/",
        "telephone": "+971588075603",
        "logo": {
          "@type": "ImageObject",
          "url": "https://wedointerior.ae/images/2wresidence.webp",
          "@id": "https://wedointerior.ae/#organizationLogo",
          "width": 1080,
          "height": 550,
          "caption": "WeDo Interior - Logo"
        },
        "sameAs": [
          "https://www.facebook.com/wedofitout",
          "https://www.instagram.com/wedo_interior/"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://wedointerior.ae/#localbusiness",
        "name": "WeDo Interiors",
        "url": "https://wedointerior.ae/",
        "telephone": "+971588075603",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Dubai, UAE",
          "addressLocality": "Dubai",
          "addressCountry": "AE"
        },
        "image": {
          "@id": "https://wedointerior.ae/#organizationLogo"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://wedointerior.ae/#webpage",
        "url": "https://wedointerior.ae/",
        "name": "Luxury Interior Design Dubai | High-End Fit-Out Experts UAE",
        "description": "Experience opulence with our award-winning interior design and premium fit-out services in Dubai. Elevate your space—consult our experts today!",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://wedointerior.ae/#website"
        },
        "breadcrumb": {
          "@id": "https://wedointerior.ae/#breadcrumblist"
        },
        "datePublished": "2023-06-28T11:09:43+00:00",
        "dateModified": "2024-01-24T04:15:42+00:00"
      },
      {
        "@type": "WebSite",
        "@id": "https://wedointerior.ae/#website",
        "url": "https://wedointerior.ae/",
        "name": "WeDo Interiors",
        "inLanguage": "en-US",
        "publisher": {
          "@id": "https://wedointerior.ae/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://wedointerior.ae/?s={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      }
    ]
  });

  return (
    <html lang="en">
      <head>
        {/* Preconnect for Faster Loading */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />

        {/* Google Tag Manager - Head */}
        <Script 
          id="gtm-script" 
          strategy="lazyOnload" 
          src="https://www.googletagmanager.com/gtm.js?id=GTM-PZSS6ZMR"
        />

        {/* Google tag (gtag.js) */}
        <Script 
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-11361089409"
        />
        
        <Script
          id="google-ads-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-11361089409');
            `,
          }}
        />

        {/* Viewport meta tag for mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* JSON-LD Structured Data - Placed Inside Head as Raw Script */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      </head>
      <body>
        {/* Google Tag Manager - Body (Noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PZSS6ZMR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}
      </body>
    </html>
  );
}
