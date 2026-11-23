import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { SplashScreen } from "@/components/sections/SplashScreen";

export const metadata: Metadata = {
  title: "Aqua Care Shop — Chennai's Leading Destination for Water Purifiers",
  description:
    "Chennai's Leading Destination for Water Purifiers, at Lower Prices Than Amazon & Flipkart. 100% Genuine Purifiers with Free Certified Technician Installation in Chennai.",
  icons: {
    icon: "/brand/favicon.svg",
    shortcut: "/brand/favicon.svg",
    apple: "/brand/aqua-care-icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#020D1A] text-white font-body antialiased selection:bg-[#00D2FF] selection:text-[#020D1A]">
        <SplashScreen />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <CartDrawer />
      </body>
    </html>
  );
}
