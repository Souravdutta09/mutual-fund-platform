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
  title: "Alok Kumar Dutta — Trusted Mutual Fund Advisor in Mumbai | Free Consultation",
  description: "Get personalized mutual fund investment guidance from Alok Kumar Dutta — 30+ years of experience, AMFI-registered distributor (ARN-111686). Free consultation for SIP planning, portfolio review, and wealth creation.",
  keywords: ["mutual fund advisor mumbai", "mutual fund distributor", "SIP planning", "investment advisor", "free consultation", "Alok Kumar Dutta", "AMFI registered"],
  icons: {
    icon: "/tahi.png",
    apple: "/tahi.png",
  },
  openGraph: {
    title: "Alok Kumar Dutta — Trusted Mutual Fund Advisor in Mumbai",
    description: "Get personalized mutual fund investment guidance from one of Mumbai's most experienced advisors. Free consultation available.",
    type: "website",
    images: [{ url: "/tahi.png", width: 512, height: 512, alt: "Alok Kumar Dutta - Mutual Fund Advisor" }],
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
