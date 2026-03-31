import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGATEM | Anti-Malaria Treatment for Pharmacies, Hospitals, and Distributors",
  description:
    "AGATEM by Grohe Pharmaceuticals. Anti-malaria treatment positioned for retail pharmacies, drug wholesalers, hospitals, and clinics across Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
