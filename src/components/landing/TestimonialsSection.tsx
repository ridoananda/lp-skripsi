"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

export default function TestimonialsSection() {
  return (
    <motion.section
      id="testimoni"
      className="w-full bg-testimonial py-16 md:py-24"
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
            Mereka yang Lebih Cepat Paham
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 text-base sm:text-lg text-black/70 font-hero-sub"
          >
            Cerita singkat dari pembelajar yang merasakan dampak AI.
          </motion.p>
        </div>

        <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4, scale: 1.01 }}
            className="rounded-2xl bg-white border border-black/10 p-6 shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-black/10 bg-[#f1f5f9] grid place-items-center">
                <span className="text-xl">🧑‍💻</span>
              </div>
              <div>
                <div className="font-semibold">Nadia</div>
                <div className="text-sm text-black/60">Mahasiswi</div>
              </div>
            </div>
            <blockquote className="mt-4 italic text-black/80">
              &quot;Materinya to the point, AI-nya bantu ngerjain step by step.&quot;
            </blockquote>
            <div className="mt-3 text-amber-400">⭐⭐⭐⭐⭐</div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4, scale: 1.01 }}
            className="rounded-2xl bg-white border border-black/10 p-6 shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-black/10 bg-[#f1f5f9] grid place-items-center">
                <span className="text-xl">👨‍🏫</span>
              </div>
              <div>
                <div className="font-semibold">Arif</div>
                <div className="text-sm text-black/60">Fresh Graduate</div>
              </div>
            </div>
            <blockquote className="mt-4 italic text-black/80">
              &quot;Belajar jadi seru karena interaktif. Progress terasa cepat.&quot;
            </blockquote>
            <div className="mt-3 text-amber-400">⭐⭐⭐⭐⭐</div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4, scale: 1.01 }}
            className="rounded-2xl bg-white border border-black/10 p-6 shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-black/10 bg-[#f1f5f9] grid place-items-center">
                <span className="text-xl">🧠</span>
              </div>
              <div>
                <div className="font-semibold">Bima</div>
                <div className="text-sm text-black/60">Pekerja</div>
              </div>
            </div>
            <blockquote className="mt-4 italic text-black/80">
              &quot;Solusi tepat buat yang waktunya mepet tapi ingin hasil maksimal.&quot;
            </blockquote>
            <div className="mt-3 text-amber-400">⭐⭐⭐⭐⭐</div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
