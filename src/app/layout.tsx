import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import ContactHeader from "@/components/ContactHeader";
import "./globals.css";
import { Toaster } from 'sonner'
import NavigationMenuDemo from "@/components/NavigationMenuDemo";
import MobileMenuDemo from "@/components/MobileMenuDemo";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { ThemeProvider } from "@/components/ThemeProvider"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bricklaying and Plastering Courses - Essex",
  description: "Build Your Future with Expert Training in Bricklaying & Plastering"
};

export default function RootLayout({
  children,
  session
}: Readonly<{
  children: React.ReactNode;
  session: Session;
}>) {
  return (
    <html suppressHydrationWarning={true}  lang="en">
      <body className={inter.className}>

        <SessionProvider session={session}>
          <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
          >
            <ContactHeader />
            <NavigationMenuDemo />
            <MobileMenuDemo />
            {children}
            <Footer />
          </ThemeProvider>
        </SessionProvider>
        <Toaster />
      </body>
    </html>
  );
}
