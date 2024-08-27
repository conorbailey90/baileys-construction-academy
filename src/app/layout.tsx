import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHeader from "@/components/ContactHeader";
import "./globals.css";
import MobileMenu from "@/components/MobileMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bailey's Brick Laying & Plastering",
description: "Build Your Future with Expert Training in Bricklaying & Plastering"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <ContactHeader />
          <Navbar />
          <MobileMenu />
          {children}
          <Footer />
      </body>
    </html>
  );
}
