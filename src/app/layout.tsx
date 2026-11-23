import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { SplashScreen } from "@/components/sections/SplashScreen";

export const metadata: Metadata = {
  title: "Aqua Care Hi-Tech Systems | Water Purifiers in Chennai, Cheaper Than Amazon & Flipkart",
  description:
    "Chennai's leading water purifier store since 2008. 8 brands, 130+ models, lower prices than Amazon & Flipkart with free doorstep delivery & certified installation across Chennai. Call +91-6383321623.",
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
