"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { getWhatsAppUrl } from "@/lib/constants";

const testimonials = [
  {
    name: "Rina",
    university: "Universitas A",
    quote: "Gila sih, skripsi 2 bulan mangkrak, kelar cuma 8 hari!",
  },
  {
    name: "Budi",
    university: "Universitas B",
    quote: "AI-nya beneran bantu, bukan cuma teori.",
  },
  {
    name: "Alya",
    university: "Universitas C",
    quote: "Prompt yang dikasih tinggal pakai, hemat waktu banget.",
  },
];

export default function Testimonial() {
  const handleWhatsAppClick = () => {
    const url = getWhatsAppUrl();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.section
      id="testimonial"
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
            Kata Mereka yang Udah Coba… 💬
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 text-base sm:text-lg text-black/70 font-hero-sub"
          >
            Cerita nyata dari mahasiswa yang skripsinya kelar lebih cepat
            dengan bantuan AI.
          </motion.p>
        </div>

        <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.01 }}
              className="rounded-2xl bg-white border border-black/10 p-6 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-black/10 bg-[#f1f5f9] grid place-items-center">
                  <span className="text-xl">🧑‍🎓</span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-black/60">{testimonial.university}</div>
                </div>
              </div>
              <blockquote className="mt-4 italic text-black/80">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <div className="mt-3 text-amber-400">⭐⭐⭐⭐⭐</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <motion.div
            variants={fadeUp}
            className="rounded-2xl bg-white/90 border border-[#1B3C53]/10 p-6 md:p-8 shadow-xl"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="font-semibold text-lg">
                  Tersisa hanya 89K untuk akses semua materi + bonusnya!
                </div>
                <div className="text-sm text-[#1B3C53]/70">
                  Harga bisa naik kapan saja.
                </div>
              </div>
              <div className="mt-4 sm:mt-0">
                <motion.button
                  type="button"
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary-hero rounded-xl px-6 py-3 text-base font-semibold text-center w-full sm:w-auto"
                  onClick={handleWhatsAppClick}
                >
                  🚀 Mulai Skripsi Sekarang
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
