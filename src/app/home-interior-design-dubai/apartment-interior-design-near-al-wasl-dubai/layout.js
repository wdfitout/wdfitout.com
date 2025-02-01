import '../../globals.css';

export const metadata = {
  title: "Al Wasl Dubai - Interior Designer Dubai - WE Do Interiors							",
  description: "Elevate your lifestyle with a touch of elegance & modernity at Al Wasl building. Browse our work on Al Wasl Dubai apartment & Book your Consultation Today.",
alternates: {
    canonical: "https://wedointerior.ae/home-interior-design-dubai/apartment-interior-design-near-al-wasl-dubai",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}