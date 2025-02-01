import '../../globals.css';

export const metadata = {
  title: "Carnistore Central Kitchen Interior Design Dubai- We Do Interiors",
  description: "Explore our project of Central Kitchen Carnistore Interior Design Dubai design by We Do interiors. We are here for creating best bars in Dubai.Contact us!",
alternates: {
    canonical: "https://www.wedointerior.ae/restaurant-interior-design-dubai/central-kitchen-interior-design-near-al-quoz-dubai",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}