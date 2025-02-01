import '../../globals.css';

export const metadata = {
  title: "Piadera cafe interior design- Dubai Design- We Do Interiors",
  description: " Piadera Cafe is the new must-visit spot with an interior design by best interior design company Dubai We Do Interiors! Contact Us Today",
alternates: {
    canonical: "https://wedointerior.ae/restaurant-interior-design-dubai/restaurant-interior-design-near-world-trade-center-dubai",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}