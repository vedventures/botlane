import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "BotLane - Web Development, Digital Marketing & AI Solutions",
  description: "Premium web development, digital marketing, and AI solutions for businesses. Boost your online presence with BotLane's expert services.",
  icons: {
    icon: "/faviconbot.ico",
    shortcut: "/faviconbot.ico",
    apple: "/faviconbot.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-[Poppins,sans-serif] antialiased bg-[#f9fafb] text-[#374151] min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
