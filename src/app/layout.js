import "./globals.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://wedointerior.ae"),
  title: "Interior Design Dubai | High-End Interior Designers In Dubai-UAE",
  description: "WeDo Interior an Award-winning interior design company in Dubai, offering elegant solutions for residential and working spaces. Contact us for premium interiors",
  keywords: "luxury interior design, Dubai fit-out company, high-end interiors, interior design companies in dubai, interior companies in dubai, interior design, design interior design, interior design interior design, design & interiors, interior and design, interior design interior, interior design a, interior design dubai, interior design companies in dubai, interior designer dubai, interior design companies near me, interior design near me, home designing, interior design dubai, interior designer dubai, fit out companies in dubai, interior design company, interior decoration company, interior designing firms, interior companies in dubai, best interior design companies in dubai, interior fit out companies in dubai, interior designers", 


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
            "position": 1,
            "name": "Home",
            "item": "https://wedointerior.ae/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://wedointerior.ae/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Interior Design Dubai",
            "item": "https://wedointerior.ae/interior-design-dubai"
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
          "addressRegion": "Dubai",
          "postalCode": "00000",
          "addressCountry": "AE"
        },
        "image": {
          "@id": "https://wedointerior.ae/#organizationLogo"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "25.183977641062384", 
          "longitude": "55.271886969323404"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        ],
        "priceRange": "$$$",
        "serviceArea": {
          "@type": "Place",
          "name": "Dubai, UAE"
        },
        "additionalType": "https://schema.org/LuxuryBusiness",
        "award": "Best Interior Design Company Dubai"
      },
      
      {
        "@type": "WebPage",
        "@id": "https://wedointerior.ae/#webpage",
        "url": "https://wedointerior.ae/",
        "name": "Interior Design Dubai | High-End Interior Designers In Dubai-UAE",
        "description": "WeDo Interior an Award-winning interior design company in Dubai, offering elegant solutions for residential and working spaces. Contact us for premium interiors",
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
          "@id": "https://wedointerior.ae/#about-us"
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
  }
  );

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

        {/* Google Ads Conversion Event */}
        <Script
          id="google-ads-conversion"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.gtag = window.gtag || function() { dataLayer.push(arguments); };
              gtag('event', 'conversion', {'send_to': 'AW-11361089409/B9iSCKDrheYZEIHvsakq'});
            `,
          }}
        />

        {/* Google Ads Tracking */}
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

        {/* Combined gtag_report_conversion Function (Handles Different Events) */}
        <Script
          id="google-ads-conversion-function"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function gtag_report_conversion(url, eventType) {
                var callback = function () {
                  if (typeof(url) !== 'undefined') {
                    window.location = url;
                  }
                };

                const eventMapping = {
                  contact: 'AW-11361089409/B9iSCKDrheYZEIHvsakq',
                  whatsapp: 'AW-11361089409/3MTICMCb_OsZEIHvsakq',
                  call: 'AW-11361089409/wchnCMOb_OsZEIHvsakq'
                };

                gtag('event', 'conversion', {
                    'send_to': eventMapping[eventType] || eventMapping.contact,
                    'event_callback': callback
                });

                return false;
              }
              window.gtag_report_conversion = gtag_report_conversion;
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
