import '../../globals.css';

export const metadata = {
  title: "Restaurant - Cafe Interior Design & Fitout in Downtown Dubai",
  description: "Elegant Restaurant & Cafe Interior Design & Fitout Project crafted by the professionals of the best interior design company Dubai. WeDo Design & fitout",
alternates: {
    canonical: "https://www.wedointerior.ae/restaurant-interior-design-dubai/restaurant-cafe-interior-design-in-downtown-dubai",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}