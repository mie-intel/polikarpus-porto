import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const montbold = Montserrat({ subsets: ["latin"], weight: ["700"] });

export const metadata: Metadata = {
  title: "Polikarpus Arya",
  description: "Polikarpus Portofolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montbold.className}>{children}</body>
    </html>
  );
}
