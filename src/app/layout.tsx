import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./constants/footer/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "R&W Engineering",
  description: "Dedicated to building long-lasting relationships",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}