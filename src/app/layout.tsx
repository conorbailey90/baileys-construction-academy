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

// export const metadata: Metadata = {
//   title: "Bricklaying and Plastering Courses - Essex",
//   description: "Build Your Future with Expert Training in Bricklaying & Plastering"
// };

export const metadata = {
  title: "Bricklaying and Plastering Courses - Essex",
  description: "Build Your Future with Expert Training in Bricklaying & Plastering",
  keywords: "bricklaying courses, plastering courses, Essex, construction skills, trade training",
  openGraph: {
    title: "Bricklaying & Plastering Courses in Essex | Hands-On Construction Training",
    description: "Enroll in professional bricklaying and plastering courses in Essex. Get practical skills from experienced instructors and start your construction career today!",
    url: "https://bricklayingandplasteringcoursesessex.com",
    images: [
      {
        url: "/public/brick.jpg", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "Bricklaying and Plastering Courses in Essex"
      }
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bricklaying & Plastering Courses in Essex",
    description: "Learn essential bricklaying and plastering skills with our hands-on courses in Essex. Book a course now to boost your construction career!",
    images: ["/public/bricklay.jpg"], // Replace with your image URL
  },
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
