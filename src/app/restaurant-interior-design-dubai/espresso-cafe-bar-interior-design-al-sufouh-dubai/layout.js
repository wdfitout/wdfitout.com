import '../../globals.css';

export const metadata = {
  title: "Segafredo Zanetti Espresso Restaurant Dubai -We Do Interiors",
  description: "Experience the new Segafredo Zanetti Espresso Restaurant Dubai, brought to life by the interior design experts at We DO Interiors. Contact Us Today!",
alternates: {
    canonical: "https://wedointerior.ae/restaurant-interior-design-dubai/espresso-cafe-bar-interior-design-al-sufouh-dubai",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}