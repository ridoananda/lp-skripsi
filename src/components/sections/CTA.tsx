"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { getWhatsAppUrl } from "@/lib/constants";

const ctaFeatures = [
  {
    text: "E-book Lengkap",
    description: "7 Hari Kelar Skripsi",
  },
  {
    text: "Bonus",
    description: "Template, Prompt AI, & Panduan Anti Plagiarisme",
  },
  {
    text: "Akses Instan",
    description: "",
  },
];

export default function CTA() {
  const handleWhatsAppClick = () => {
    const url = getWhatsAppUrl();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.section
      id="cta"
      className="w-full relative overflow-hidden bg-cta py-16 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
    >
      <div className="absolute inset-0 cta-overlay pointer-events-none"></div>
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h2
            variants={fadeUp}
            className="font-hero-heading font-extrabold text-white text-3xl sm:text-4xl md:text-5xl leading-tight"
          >
            Jangan Tunggu Sampai Deadline Mepet! 🚀
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 text-base sm:text-lg text-white/90 font-hero-sub"
          >
            Skripsimu bisa kelar minggu ini juga kalau mulai sekarang.
          </motion.p>
          <motion.ul
            variants={fadeUp}
            className="mt-6 space-y-3 text-white/90"
          >
            {ctaFeatures.map((feature, index) => (
              <li key={index}>
                ✅ <span className="font-semibold">{feature.text}</span>{" "}
                {feature.description}
              </li>
            ))}
          </motion.ul>
          <div className="mt-7">
            <motion.button
              type="button"
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary-hero text-center rounded-2xl px-7 py-4 text-lg font-bold inline-block w-full sm:w-auto"
              onClick={handleWhatsAppClick}
            >
              🔥 Mulai Skripsi Sekarang
            </motion.button>
            <div className="text-xs text-white/80 mt-2">
              *Harga promo cuma berlaku hari ini
            </div>
          </div>
        </div>
        <motion.div variants={fadeUp} className="relative">
          <Image
            src="/images/trophy.webp"
            width={720}
            height={720}
            alt="Ilustrasi piala kemenangan"
            className="mx-auto w-full rounded-2xl"
            sizes="(max-width: 768px) 364px, 400px"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
