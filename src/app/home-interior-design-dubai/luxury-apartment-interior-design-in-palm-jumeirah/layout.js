import '../../globals.css';

export const metadata = {
  title: "Luxury Apartment Interior Design In Palm Jumeirah- We Do Design",
  description: "Unlock the potential of apartment interior design in The Palm Jumeirah Dubai. WeDo Design & Fitout elevate the living interior spaces into a luxury and modern living experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};
