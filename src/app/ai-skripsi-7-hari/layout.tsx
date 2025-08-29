import type { Metadata } from "next";
import { Footer } from "@/components/landing";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (typeof window !== "undefined"
    ? `${window.location.protocol}//${window.location.host}`
    : "https://bantuanaiq.id");

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: "AI Skripsi 7 Hari – Selesaikan Skripsi Lebih Cepat dengan AI",
  description:
    "Panduan langkah demi langkah untuk menyelesaikan skripsi dalam 7 hari dengan bantuan AI. Termasuk template siap pakai, kumpulan prompt, dan tips anti plagiarisme.",
  keywords: [
    "skripsi AI",
    "skripsi 7 hari",
    "menulis skripsi",
    "penelitian",
    "template skripsi",
    "prompt AI",
    "anti plagiarisme",
    "ebook skripsi",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/ai-skripsi-7-hari",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/ai-skripsi-7-hari",
    title: "AI Skripsi 7 Hari – Selesaikan Skripsi Lebih Cepat dengan AI",
    description:
      "Panduan langkah demi langkah untuk menyelesaikan skripsi dalam 7 hari dengan bantuan AI. Termasuk template siap pakai, kumpulan prompt, dan tips anti plagiarisme.",
    siteName: "eBook Skripsi",
    images: [
      {
        url: "/images/skripsi-mahasiswa.webp",
        alt: "Pratinjau eBook Skripsi Berbasis AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Skripsi 7 Hari – Selesaikan Skripsi Lebih Cepat dengan AI",
    description:
      "Panduan langkah demi langkah untuk menyelesaikan skripsi dalam 7 hari dengan bantuan AI. Termasuk template siap pakai, kumpulan prompt, dan tips anti plagiarisme.",
    images: ["/images/skripsi-mahasiswa.webp"],
  },
};

export default function AiSkripsiLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
