"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

export default function StatisticsSection() {
  return (
    <motion.section
      id="statistik"
      className="w-full bg-[#1B3C53] py-16 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            variants={fadeUp}
            className="font-hero-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white"
          >
            Hasil Belajar Tools AI
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 text-base sm:text-lg text-white/80 font-hero-sub"
          >
            Bukti nyata dari ribuan peserta yang telah menguasai AI tools untuk produktivitas.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <motion.div variants={fadeUp} className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-white">5K+</div>
            <div className="text-sm text-white/70">Peserta Aktif</div>
          </motion.div>
          <motion.div variants={fadeUp} className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-white">70%</div>
            <div className="text-sm text-white/70">Peningkatan Produktivitas</div>
          </motion.div>
          <motion.div variants={fadeUp} className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-white">2-4</div>
            <div className="text-sm text-white/70">Minggu Kuasai Tools</div>
          </motion.div>
          <motion.div variants={fadeUp} className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-white">15+</div>
            <div className="text-sm text-white/70">AI Tools Dipelajari</div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
