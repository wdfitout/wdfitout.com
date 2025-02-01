import "../globals.css";

export const metadata = {
  title: "Leading Fit-Out Company Dubai | Premium Turnkey Solutions",
  description: "Partner with WeDo Interior, the leading fit-out company in Dubai. We offer premium turnkey solutions tailored to create functional spaces. Contact us today!",
alternates: {
    canonical: "https://www.wedointerior.ae/fitout-company-dubai",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


