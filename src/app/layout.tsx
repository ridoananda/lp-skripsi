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
    default: "Bantuan AI - Platform Belajar Tools AI untuk Produktivitas & Cara Kerja AI",
    template: "%s | Bantuan AI"
  },
  description: "Tempat Kamu belajar 'ngendaliin' AI biar kerjaan makin cepat, hidup makin gampang, dan masa depan terasa lebih dekat. Belajar ChatGPT, Midjourney, dan tools AI lainnya.",
  keywords: [
    "AI tools",
    "ChatGPT",
    "Midjourney", 
    "belajar AI",
    "produktivitas AI",
    "tools AI Indonesia",
    "kursus AI",
    "e-course AI",
    "prompt engineering",
    "AI workflow",
    "produktivitas kerja",
    "skill masa depan"
  ],
  authors: [{ name: "Bantuan AI Team" }],
  creator: "Bantuan AI",
  publisher: "Bantuan AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bantuanai.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bantuan AI - Platform Belajar Tools AI untuk Produktivitas",
    description: "Tempat Kamu belajar 'ngendaliin' AI biar kerjaan makin cepat, hidup makin gampang, dan masa depan terasa lebih dekat.",
    url: "https://bantuanai.com",
    siteName: "Bantuan AI",
    images: [
      {
        url: "/images/logo.webp",
        width: 1200,
        height: 630,
        alt: "Bantuan AI - Platform Belajar Tools AI",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bantuan AI - Platform Belajar Tools AI untuk Produktivitas",
    description: "Tempat Kamu belajar 'ngendaliin' AI biar kerjaan makin cepat, hidup makin gampang, dan masa depan terasa lebih dekat.",
    images: ["/images/logo.webp"],
    creator: "@bantuanai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "education",
  classification: "AI Learning Platform",
  other: {
    "theme-color": "#1B3C53",
    "color-scheme": "light",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Bantuan AI",
    "application-name": "Bantuan AI",
    "msapplication-TileColor": "#1B3C53",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#1B3C53" />
        <meta name="theme-color" content="#1B3C53" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${nunito.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
