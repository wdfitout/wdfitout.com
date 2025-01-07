import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Head from 'next/head';
import './globals.css';

export const metadata = {
  title: "Interior Design Dubai - Luxury Interior Designers in UAE",
  description: "Best interior design company in Dubai. We Do Interior Design. We are offering professional services of Interior Design and fitout. Contact us today!",
};

export default function RootLayout({ children }) {
  return (
    <>
 
      <html lang="en">
        <body>{children}
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </>
  );
}
