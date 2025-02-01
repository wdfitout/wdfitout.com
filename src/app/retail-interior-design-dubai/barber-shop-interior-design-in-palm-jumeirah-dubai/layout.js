import '../../globals.css';

export const metadata = {
  title: "Peaky Blinder Barber Shop-Interior Design -We Do Interiors",
  description: "Experience the peaky blinder barber shop with We Do Interiors. We specialize in creating stunning barber shop interiors. Best Interior Designer Dubai.",
alternates: {
    canonical: "https://wedointerior.ae/retail-interior-design-dubai/barber-shop-interior-design-in-palm-jumeirah-dubai",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}