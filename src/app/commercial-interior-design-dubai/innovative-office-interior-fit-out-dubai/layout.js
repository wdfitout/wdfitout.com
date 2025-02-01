import '../../globals.css';

export const metadata = {
  title: "Star Tech Company Interior Design Dubai - We Do Interiors",
  description: "Create a workspace for your company. We Do Interiors specializes in designing cutting-edge office interiors like Star Tech Company. Contact us Today!",
 alternates: {
    canonical: "https://www.wedointerior.ae/commercial-interior-design-dubai/innovative-office-interior-fit-out-dubai",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

