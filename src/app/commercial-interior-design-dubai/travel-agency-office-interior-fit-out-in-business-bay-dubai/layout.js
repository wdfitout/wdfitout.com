import '../../globals.css';

export const metadata = {
  title: "MEBY Tourism Office Interior Design Dubai - We Do Interiors",
  description: "Create a captivating travelling agency office with We Do Interiors. Our interior design experts will transform your office like MEBY Tourism office .Contact Us!",
alternates: {
    canonical: "https://wedointerior.ae/commercial-interior-design-dubai/travel-agency-office-interior-fit-out-in-business-bay-dubai",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
