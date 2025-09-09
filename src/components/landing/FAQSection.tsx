"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

export default function FAQSection() {
  return (
    <motion.section
      id="faq"
      className="w-full bg-faq py-16 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            variants={fadeUp}
            className="font-hero-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-primary"
          >
            FAQ Tools AI
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 text-base sm:text-lg font-hero-sub"
          >
            Pertanyaan seputar belajar tools AI dan produktivitas.
          </motion.p>
        </div>

        <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4, scale: 1.01 }}
            className="rounded-2xl bg-white border border-black/10 p-6 shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#eaefff] grid place-items-center text-xl flex-shrink-0">❓</div>
              <div>
                <h3 className="font-semibold text-lg">Apa yang akan saya pelajari?</h3>
                <p className="text-sm text-black/70 mt-1">Anda akan belajar cara menggunakan tools AI seperti ChatGPT, Midjourney, dan lainnya untuk meningkatkan produktivitas kerja.</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4, scale: 1.01 }}
            className="rounded-2xl bg-white border border-black/10 p-6 shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#eafff2] grid place-items-center text-xl flex-shrink-0">🎓</div>
              <div>
                <h3 className="font-semibold text-lg">Apakah saya perlu background AI?</h3>
                <p className="text-sm text-black/70 mt-1">Tidak! Materi dirancang untuk pemula. Kami akan mengajarkan dari dasar cara kerja AI hingga penggunaan praktis.</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4, scale: 1.01 }}
            className="rounded-2xl bg-white border border-black/10 p-6 shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#fff6db] grid place-items-center text-xl flex-shrink-0">🚀</div>
              <div>
                <h3 className="font-semibold text-lg">Berapa lama bisa menguasai tools AI?</h3>
                <p className="text-sm text-black/70 mt-1">Dengan metode kami, dalam 2-4 minggu Anda sudah bisa menggunakan AI tools untuk produktivitas sehari-hari.</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4, scale: 1.01 }}
            className="rounded-2xl bg-white border border-black/10 p-6 shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#fce7f3] grid place-items-center text-xl flex-shrink-0">📱</div>
              <div>
                <h3 className="font-semibold text-lg">Tools AI apa saja yang akan dipelajari?</h3>
                <p className="text-sm text-black/70 mt-1">ChatGPT, Midjourney, Notion AI, Grammarly, dan berbagai tools produktivitas AI lainnya yang relevan.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
