import "../globals.css";

export const metadata = {
  title: "Exclusive Design & Build Services Dubai | Luxury Solutions",
  description: "Explore exclusive design and build services in Dubai. WeDo Interior deliver luxury solutions for elegant spaces. Contact us now to start your visionary project!",
alternates: {
    canonical: "https://www.wedointerior.ae/design-build-services-in-dubai",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

