import "../globals.css";

export const metadata = {
  title: "Luxury Villa Construction Dubai | Tailored G+1 Dream Homes",
  description: "Experience luxury villa construction in Dubai with WeDo Interior. We create tailored G+1 villas with elegance. Contact us today to start your project",
alternates: {
    canonical: "https://www.wedointerior.ae/villa-construction-dubai",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
