import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const geistSans = Inter({
  variable: "--font-inter-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lima's Pizza",
  description: "A pizza favorita dos Annunakis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} background antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
