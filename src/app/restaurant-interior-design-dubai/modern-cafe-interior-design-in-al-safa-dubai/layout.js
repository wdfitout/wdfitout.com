import '../../globals.css';

export const metadata = {
  title: "KARAKNA CAFE interior Design Dubai- We Do Interiors",
  description: "Experience Karakna Dubai Cafe! interior design by We Do interior designer dubai, a top interior design company. Contact us for best interior design dubai.",
alternates: {
    canonical: "https://wedointerior.ae/restaurant-interior-design-dubai/modern-cafe-interior-design-in-al-safa-dubai",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
