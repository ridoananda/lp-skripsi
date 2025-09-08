"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const problemCards = [
  {
    image: "/images/why-section/3.webp",
    title: "Bingung milih topik",
    description: "Semua topik keliatan rumit, nggak ada yang cocok sama passion.",
  },
  {
    image: "/images/why-section/2.webp",
    title: "Ribet nyari jurnal",
    description: "Waktu habis cuma buat cari referensi yang valid.",
  },
  {
    image: "/images/why-section/1.webp",
    title: "Revisi nggak kelar-kelar",
    description: "Baru selesai revisi, eh revisi lagi.",
  },
];

export default function Problem() {
  return (
    <motion.section
      id="problem"
      className="w-full bg-[#e6eef4] py-16 md:py-24"
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
            Kenapa Skripsi Bikin Stress? 🤯
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 text-base sm:text-lg text-black/70 font-hero-sub"
          >
            Ada tiga alasan utama yang bikin skripsi jadi drama panjang:
          </motion.p>
        </div>

        <motion.div variants={fadeUp} className="mt-8 md:mt-12">
          <Image
            src="/images/mahasiswa-stress.webp"
            width={720}
            height={720}
            alt="Ilustrasi mahasiswa stres karena tugas skripsi"
            className="mx-auto w-full sm:w-1/2 rounded-2xl"
            sizes="(max-width: 640px) 364px, 400px"
          />
        </motion.div>

        <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 text-center">
          {problemCards.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.01 }}
              className="rounded-xl p-5 bg-white border border-[#1B3C53]/10"
            >
              <div className="w-20 h-20 mx-auto">
                <Image
                  src={card.image}
                  width={80}
                  height={80}
                  alt={`Ikon ${card.title}`}
                  className="w-20 h-20 object-contain"
                  sizes="80px"
                />
              </div>
              <div className="mt-2 font-semibold">{card.title}</div>
              <div className="mt-1 text-sm text-[#1B3C53]/70">
                {card.description}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 md:mt-12">
          <motion.div
            variants={fadeUp}
            className="rounded-2xl px-5 py-4 bg-white/90 border border-[#1B3C53]/10 shadow max-w-md mx-auto"
          >
            <div className="text-center font-semibold">
              &quot;Kami paham... makanya E-book ini hadir!&quot;
            </div>
            <div className="text-center text-sm text-[#1B3C53]/70 mt-1">
              😌 Tenang… semua ini bisa di-handle sama AI kalau tau caranya.
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
