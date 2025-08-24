"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

export default function ProductsSection() {
  return (
    <motion.section
      id="produk"
      className="w-full bg-white py-16 md:py-24"
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
            Pilih Cara Belajarmu
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 text-base sm:text-lg text-black/70 font-hero-sub"
          >
            Mulai perjalanan belajarmu sekarang. Pilih e-book atau E-Course yang sesuai dengan kebutuhanmu.
          </motion.p>
        </div>

        <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4, scale: 1.01 }}
            className="rounded-2xl bg-white border border-black/10 p-6 shadow-lg"
          >
            <div className="aspect-[16/10] rounded-xl overflow-hidden bg-[#f1f5f9] grid place-items-center">
              <Image
                src="/images/pilih-cara-belajarmu/ebook.webp"
                width={800}
                height={500}
                alt="E-Book Digital"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <div className="font-semibold text-lg">E-Book Digital</div>
                <div className="text-sm text-black/70">Materi ringkas. Contoh siap pakai.</div>
              </div>
              <a href="/ai-skripsi-7-hari" className="btn-primary-hero rounded-full px-4 py-2 text-sm font-semibold">Pilih E-Book</a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4, scale: 1.01 }}
            className="rounded-2xl bg-white border border-black/10 p-6 shadow-lg"
            id="ecourse"
          >
            <div className="aspect-[16/10] rounded-xl overflow-hidden bg-[#ecfeff] grid place-items-center">
              <Image
                src="/images/pilih-cara-belajarmu/ecourse.webp"
                width={800}
                height={500}
                alt="E-Course"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <div className="font-semibold text-lg">E-Course</div>
                <div className="text-sm text-black/70">Belajar dua arah. Praktik langsung.</div>
              </div>
              <a href="#cta" className="btn-secondary-hero rounded-full px-4 py-2 text-sm font-semibold">Lihat Detail</a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
