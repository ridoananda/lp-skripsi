import type { Metadata } from "next";
import { Geist_Mono, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Inter will be our primary body font
const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

// Plus Jakarta Sans for headings
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-hero-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
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
        className={`${inter.variable} ${geistMono.variable} ${plusJakarta.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
