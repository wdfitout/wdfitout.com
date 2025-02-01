import "../globals.css";

export const metadata = {
  title: "Elegant Hotel Interior Design Dubai | Bespoke & Iconic Spaces",
  description: "Transform your hotel with elegant interior design in Dubai WeDo Interior. We create iconic spaces tailored for luxury and guest satisfaction. Contact us today!",
alternates: {
    canonical: "https://www.wedointerior.ae/hotel-interior-design-dubai",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
