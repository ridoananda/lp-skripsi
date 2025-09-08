"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { getWhatsAppUrl } from "@/lib/constants";

const stepCards = [
  {
    image: "/images/step-section/1.webp",
    title: 'Hari 1 – Fundamental AI: "Biar AI yang Pusing, Bukan Kamu"',
    description: "Setup mindset produktif & tools AI terbaik",
  },
  {
    image: "/images/step-section/2.webp",
    title: 'Hari 2 – Menentukan Topik: "Topik Bukan Takdir, Bisa Dinego Sama AI"',
    description: "Temukan topik yang relevan & unik",
  },
  {
    image: "/images/step-section/3.webp",
    title: "Hari 3 – Literatur & Referensi Otomatis",
    description: "Gunakan AI untuk filter jurnal",
  },
  {
    image: "/images/step-section/4.webp",
    title: "Hari 4 – Nulis Bab 1 & 2 Tanpa Overthinking",
    description: "Struktur pendahuluan yang solid",
  },
  {
    image: "/images/step-section/5.webp",
    title: "Hari 5 – Pengumpulan & Pengolahan Data Otomatis",
    description: "Panduan pengumpulan & analisis data",
  },
  {
    image: "/images/step-section/6.webp",
    title: "Hari 6 – Bab 3 & 4 Gak Lagi Misteri",
    description: "Metodologi & hasil riset dengan AI",
  },
  {
    image: "/images/step-section/7.webp",
    title: "Hari 7 – Editing, Plagiarisme & Finalisasi",
    description: "Grammar, plagiarisme, layout akhir",
  },
];

export default function Solution() {
  const handleWhatsAppClick = () => {
    const url = getWhatsAppUrl();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.section
      id="solution"
      className="w-full bg-solution py-16 md:py-24"
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
            Kenalin, Partner Skripsi Baru Kamu: AI 🤖
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 text-base sm:text-lg text-black/70 font-hero-sub"
          >
            7 Hari Step-by-Step skripsi kelar, full tutorial + prompt AI siap
            pakai.
          </motion.p>
        </div>

        <div className="mt-8 md:mt-12 grid md:grid-cols-[1fr_1.2fr] gap-8 md:gap-10 items-stretch">
          <motion.div variants={fadeUp}>
            <Image
              src="/images/teaching.webp"
              width={720}
              height={720}
              alt="Ilustrasi AI yang sedang mengajar"
              className="mx-auto w-full rounded-2xl"
              sizes="(max-width: 768px) 364px, 400px"
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {stepCards.map((card, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`rounded-xl p-5 bg-white/80 border border-black/10 hover:bg-[#a7f3d0]/40 transition-colors ${
                  index === 6 ? "sm:col-span-1" : ""
                }`}
              >
                <div className="w-20 h-20">
                  <Image
                    src={card.image}
                    width={80}
                    height={80}
                    alt={`Hari ${index + 1}: Ikon ${card.title}`}
                    className="w-20 h-20 object-contain"
                    sizes="80px"
                  />
                </div>
                <div className="mt-2 text-lg">
                  <span className="font-semibold">{card.title}</span>
                </div>
                <div className="mt-1 text-sm text-black/70">
                  {card.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <motion.button
            type="button"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary-hero rounded-xl px-6 py-3 text-base font-semibold text-center"
            onClick={handleWhatsAppClick}
          >
            🚀 Mulai Skripsi dengan AI
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}
