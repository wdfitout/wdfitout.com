import '../../globals.css';

export const metadata = {
  title: "Apartment Interior Design at Atlantis The Royal | Elegant Living",
  description: "Explore the elegance of Atlantis The Royal. Bring your vision to life with We Do interior design company. Contact us Today & transform your space!",
alternates: {
    canonical: "https://wedointerior.ae/home-interior-design-dubai/apartment-interior-design-atlantis-the-royal",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}