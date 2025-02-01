import '../../globals.css';

export const metadata = {
  title: "Vouge Cafe interior Design Dubai-We Do Interiors",
  description: " Discover a stunning Dubai cafe interior design at Vouge Cafe .Our interior design team crafted a unique space, Let us transform your Dubai cafe.Contact us!",
alternates: {
    canonical: "https://www.wedointerior.ae/restaurant-interior-design-dubai/luxury-cafe-interior-design-in-downtown-dubai",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}