"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { getWhatsAppUrl } from "@/lib/constants";

export default function Hero() {
  const whatsAppHref = getWhatsAppUrl();

  return (
    <main id="beli" className="w-full max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10 items-center">
      <motion.section variants={stagger} initial="hidden" animate="visible">
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white border border-white/20 text-xs font-medium mb-5"
        >
          <span>🚀 Fast Track</span>
          <span className="text-white/80">Gen Z Edition</span>
        </motion.div>
        <motion.h1
          variants={fadeUp}
          className="font-hero-heading font-extrabold text-white text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight"
        >
          Skripsi Kelar 7 Hari? YES, AI Can Do It! 🚀
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-4 text-base sm:text-lg md:text-xl text-white/80 font-hero-sub"
        >
          Panduan anti-baper & anti-ngaret untuk mahasiswa Gen Z, dari milih
          topik sampai kelar, semua dibantu AI.
        </motion.p>
        <div className="mt-7 flex flex-col sm:flex-row gap-4">
          <motion.a
            href={whatsAppHref}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary-hero rounded-xl px-5 py-3 text-base font-semibold text-center w-full sm:w-auto"
          >
            🔥 Dapatkan Sekarang
          </motion.a>
          <motion.a
            href="#preview"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="btn-secondary-hero rounded-xl px-5 py-3 text-base font-semibold text-center w-full sm:w-auto"
          >
            👀 Lihat Contoh Halaman
          </motion.a>
        </div>
        <motion.div
          variants={fadeUp}
          id="bonus"
          className="mt-6 w-full inline-flex flex-col sm:flex-row sm:w-auto rounded-xl bg-white/20 text-white border border-white/20 backdrop-blur px-4 py-3"
        >
          <span>🎁 BONUS:</span>
          <span>Template Skripsi + Prompt AI Rahasia</span>
        </motion.div>
      </motion.section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="relative"
      >
        <Image
          src="/images/skripsi-mahasiswa.webp"
          width={720}
          height={720}
          alt="Ilustrasi mahasiswa mengerjakan skripsi dengan bantuan AI"
          className="mx-auto w-full rounded-2xl"
          priority
          loading="eager"
          fetchPriority="high"
          sizes="(max-width: 768px) 364px, 400px"
        />
      </motion.section>
    </main>
  );
}
