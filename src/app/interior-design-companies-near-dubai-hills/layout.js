import "../globals.css";

export const metadata = {
  title: "Prime Interior Design Companies Near Dubai Hills | WeDo Interior",
  description: "Find prime interior design company near Dubai Hills, WeDo Interior. We specialize in creating elegant, tailored spaces for luxury living. Contact us today!",
 alternates: {
    canonical: "https://wedointerior.ae/interior-design-companies-near-dubai-hills",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}