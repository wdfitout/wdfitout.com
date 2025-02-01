import '../../globals.css';

export const metadata = {
  title: "6W Residence Penthouse Dubai - Interior by WE Do interiors",
  description: "Looking for a trusted partner for penthouse interior design? Well! We DO interiors is the Best option for you in Dubai. UAE. Contact us Today.",
alternates: {
    canonical: "https://wedointerior.ae/home-interior-design-dubai/modern-penthouse-interior-design-in-dafza-6w-dubai",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}