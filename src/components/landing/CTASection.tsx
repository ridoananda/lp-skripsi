"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

export default function CTASection() {
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
            Mulai perjalanan belajarmu sekarang
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 text-base sm:text-lg text-white/90 font-hero-sub"
          >
            Pilih e-book atau E-Course yang sesuai dengan kebutuhanmu.
          </motion.p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <motion.a
              href="/ai-skripsi-7-hari"
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary-hero text-center rounded-2xl px-7 py-4 text-base font-bold inline-block w-full sm:w-auto"
            >
              📚 Pilih E-book
            </motion.a>
            <motion.a
              href="#ecourse"
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary-hero text-center rounded-2xl px-7 py-4 text-base font-bold inline-block w-full sm:w-auto"
            >
              🎓 Lihat ECourse
            </motion.a>
          </div>
          <div className="mt-4">
            <motion.a
              href="/blog"
              whileHover={{ y: -1, opacity: 0.9 }}
              whileTap={{ scale: 0.98 }}
              className="text-white/80 hover:text-white underline text-sm font-medium transition-colors"
            >
              📖 Baca artikel terbaru di blog kami →
            </motion.a>
          </div>
        </div>
        <motion.div variants={fadeUp} className="relative">
          <Image
            src="/images/trophy.webp"
            width={720}
            height={720}
            alt="Ilustrasi pencapaian belajar"
            className="mx-auto w-full rounded-2xl"
            sizes="(max-width: 768px) 364px, 400px"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
