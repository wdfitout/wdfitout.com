import "../globals.css";

export const metadata = {
  title: "Elegant Restaurant Interior Design Dubai | Captivating Spaces",
  description: "Discover elegant restaurant interior design in Dubai with WeDo Interior. We craft captivating spaces that enhance ambiance and elevate the dining experience.",
alternates: {
    canonical: "https://wedointerior.ae/restaurant-interior-design",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
