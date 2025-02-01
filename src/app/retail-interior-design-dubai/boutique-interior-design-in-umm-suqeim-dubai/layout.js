import '../../globals.css';

export const metadata = {
  title: "Manal AJAJ Boutique Interior Design Dubai | We Do Interiors",
  description: "Create a fashion boutique with We Do Interiors. Our expert interior designers will bring the Manal AJAJ brand to life through exceptional interior design.",
alternates: {
    canonical: "https://wedointerior.ae/retail-interior-design-dubai/boutique-interior-design-in-umm-suqeim-dubai",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}