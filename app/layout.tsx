import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RF Calculators",
  description: "PLL, VCO, and Phase Noise Calculators",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
