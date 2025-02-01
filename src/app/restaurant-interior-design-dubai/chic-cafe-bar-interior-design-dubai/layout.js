import '../../globals.css';

export const metadata = {
  title: "Allegro Cafe & Bar Interior Design- We Do Interiors",
  description: "Allegro Cafe & Bar! Our interior design team created a captivating atmosphere by working as one of the best interior design companies Dubai. We Do Interior",
alternates: {
    canonical: "https://www.wedointerior.ae/restaurant-interior-design-dubai/chic-cafe-bar-interior-design-dubai",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}