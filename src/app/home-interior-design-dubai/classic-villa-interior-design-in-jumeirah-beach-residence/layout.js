import '../../globals.css';

export const metadata = {
  title: "Jumeirah Beach Residence Interiors - We Do Interiors",
  description: "jumeirah beach residence with We Do Interiors showcase new ceiling design,interior furniture, and Breathtaking Views. Contact us today.",
alternates: {
    canonical: "https://wedointerior.ae/home-interior-design-dubai/classic-villa-interior-design-in-jumeirah-beach-residence",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}