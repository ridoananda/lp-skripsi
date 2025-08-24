"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

export default function HeroSection() {
  return (
    <div className="min-h-screen w-full bg-hero">
      <main className="w-full max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10 items-center">
        <motion.section variants={stagger} initial="hidden" animate="visible">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white border border-white/20 text-xs font-medium mb-5"
          >
            <span>💡 Belajar Cerdas</span>
            <span className="text-white/80">Dibantu AI</span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-hero-heading font-extrabold text-white text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight"
          >
            Platform Belajar Tools AI untuk Produktivitas
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-base sm:text-lg md:text-xl text-white/80 font-hero-sub"
          >
            Tempat Kamu belajar “ngendaliin” AI biar kerjaan makin cepat, hidup makin gampang, dan masa depan terasa lebih dekat. 🚀
          </motion.p>
          <div className="mt-7 flex flex-col sm:flex-row gap-4">
            <motion.a
              href="#produk"
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary-hero rounded-xl px-5 py-3 text-base font-semibold text-center w-full sm:w-auto"
            >
              🚀 Mulai perjalananmu
            </motion.a>
            <motion.a
              href="/ai-skripsi-7-hari"
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary-hero rounded-xl px-5 py-3 text-base font-semibold text-center w-full sm:w-auto"
            >
              📚 Lihat E-book
            </motion.a>
          </div>
          <motion.div
            variants={fadeUp}
            className="mt-6 w-full inline-flex flex-col sm:flex-row sm:w-auto rounded-xl bg-white/20 text-white border border-white/20 backdrop-blur px-4 py-3"
          >
            <span>✨ Fokus: Materi nyata, ringkas, dan interaktif.</span>
          </motion.div>
        </motion.section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <Image
            src="/images/teaching.webp"
            width={720}
            height={720}
            alt="Ilustrasi belajar dengan bantuan AI"
            className="mx-auto w-full rounded-2xl"
            priority
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 768px) 364px, 400px"
          />
        </motion.section>
      </main>
    </div>
  );
}
