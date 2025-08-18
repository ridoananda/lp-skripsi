import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Nunito } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-hero-heading",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-hero-sub",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "eBook Skripsi",
    template: "%s | eBook Skripsi",
  },
  description: "Landing page eBook skripsi berbasis AI",
  verification: {
    google: "cAYCf4yCDSVDJLKPg-3ADOMHJSI9kbY7VqSDlfBKYlY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${nunito.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
