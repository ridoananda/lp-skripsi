"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { getWhatsAppUrl } from "@/lib/constants";

const bonusItems = [
  {
    image: "/images/bonus-section/1.webp",
    title: "Template Skripsi Siap Pakai",
    description: "Tinggal edit, sesuaiin sama topik skripsi kamu.",
  },
  {
    image: "/images/bonus-section/2.webp",
    title: "Daftar Prompt AI Skripsi",
    description: "Prompt siap pakai untuk milih topik, cari jurnal, dan nulis Bab.",
  },
  {
    image: "/images/bonus-section/3.webp",
    title: "Panduan Bebas Plagiarisme",
    description: "Tips & trik lolos uji Turnitin tanpa drama.",
  },
];

export default function Bonus() {
  const handleWhatsAppClick = () => {
    const url = getWhatsAppUrl();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.section
      id="bonus"
      className="w-full bg-bonus py-16 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            variants={fadeUp}
            className="font-hero-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#1B3C53]"
          >
            Bonus Spesial Buat Kamu 🎁
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 text-base sm:text-lg text-black/70 font-hero-sub"
          >
            Semua pembelian E-book ini akan mendapatkan bonus eksklusif yang
            bikin proses skripsi kamu makin gampang.
          </motion.p>
        </div>

        <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {bonusItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.01 }}
              className="rounded-2xl bg-white border border-black/10 p-6 shadow-lg text-center"
            >
              <div className="w-20 h-20 mx-auto">
                <Image
                  src={item.image}
                  width={80}
                  height={80}
                  alt={`Ikon ${item.title}`}
                  className="w-20 h-20 object-contain"
                  sizes="80px"
                />
              </div>
              <div className="mt-3 font-semibold text-lg">{item.title}</div>
              <div className="mt-1 text-sm text-black/70">{item.description}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <motion.div
            variants={fadeUp}
            className="rounded-2xl bg-[#fff6b3] border border-[#1B3C53]/10 p-6 md:p-8 shadow-xl"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="font-semibold text-lg">
                  💎 Total value Rp 500.000, sekarang cuma 89K!
                </div>
                <div className="text-sm text-[#1B3C53]/70">
                  Dapatkan semua bonus + E-book dalam sekali beli.
                </div>
              </div>
              <div>
                <motion.button
                  type="button"
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary-hero inline-flex rounded-xl px-6 py-3 text-base font-semibold text-center w-full sm:w-auto"
                  onClick={handleWhatsAppClick}
                >
                  🔥 Ambil Semua Bonus & E-book Sekarang
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
