import '../../globals.css';

export const metadata = {
  title: "Crazy Mask Cafe Interior Design Dubai - We Do Interiors",
  description: "Step into the world of Crazy Mask Cafe designed by best interior design company Dubai. Ready to create your own unique Dubai cafe?  Contact We Do Interiors",
alternates: {
    canonical: "https://www.wedointerior.ae/restaurant-interior-design-dubai/restaurtant-lounge-interior-design-in-jbr-dubai",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}