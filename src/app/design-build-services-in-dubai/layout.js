import '../globals.css';

export const metadata = {
  title: " Design and Build Services Dubai | Expert Interior Fit-out",
  description: "Expert design and build services in Dubai. Transform your space with our innovative solutions. From concept to completion, we deliver stunning interior designs and flawless execution.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};
