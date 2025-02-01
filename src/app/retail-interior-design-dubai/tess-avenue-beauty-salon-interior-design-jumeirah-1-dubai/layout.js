import '../../globals.css';

export const metadata = {
  title: "Luxury Beauty Salon Interior Fitout Project Near Jumeirah 1, Dubai, UAE",
  description: "WeDo Design & Fitout as Top 1 Interior Design Fitout company Dubai, crafted this Luxury working space.",
alternates: {
    canonical: "https://wedointerior.ae/retail-interior-design-dubai/tess-avenue-beauty-salon-interior-design-jumeirah-1-dubai",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}