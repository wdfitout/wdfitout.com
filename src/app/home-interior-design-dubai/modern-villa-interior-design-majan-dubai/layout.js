import '../../globals.css';

export const metadata = {
  title: "Majan Villa Interior Design Dubai - We Do interiors	",
  description: "Explore majjan Villa project by We Do Interiors. Luxury villa & modern house design ✓ joinery works ✓ new ceiling design & splendour villas.",
alternates: {
    canonical: "https://www.wedointerior.ae/home-interior-design-dubai/modern-villa-interior-design-majan-dubai",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}