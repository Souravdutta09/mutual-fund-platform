import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/layout/navbar";
import Footer from "@/src/components/footer/footer";
import MarketTicker from "@/src/components/layout/MarketTicker";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sourav Dutta — Mutual Fund Distributor",
  description: "Personalized mutual fund investment guidance and goal-based financial planning by Sourav Dutta. Mentored by senior financial expert Alok Kumar Dutta (30+ years experience). Free consultation for SIP, portfolio review, and wealth creation.",
  keywords: ["mutual fund distributor", "Sourav Dutta", "goal planning", "SIP calculator", "portfolio review", "Chakulia", "Jharkhand", "Pune", "mutual fund advisor", "Alok Kumar Dutta"],
  icons: {
    icon: "/tree.png",
    apple: "/tree.png",
  },
  openGraph: {
    title: "Sourav Dutta — Mutual Fund Distributor",
    description: "Personalized mutual fund investment guidance and goal-based financial planning by Sourav Dutta. Mentored by veteran advisor Alok Kumar Dutta.",
    type: "website",
    images: [{ url: "/tahi.png", width: 512, height: 512, alt: "Sourav Dutta - Mutual Fund Distributor" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        className={`${inter.className} antialiased`}
        suppressHydrationWarning={true}
      >
        <div className="min-h-screen flex flex-col">
          <div className="sticky top-0 z-50">
            <MarketTicker />
            <Navbar />
          </div>
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
