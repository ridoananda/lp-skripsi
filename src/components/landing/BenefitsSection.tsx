"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import Image from "next/image";

export default function BenefitsSection() {
  return (
    <motion.section
      id="keuntungan"
      className="w-full bg-[#f8fafc] py-16 md:py-24"
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
            Keuntungan Belajar Tools AI
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 text-base sm:text-lg text-black/70 font-hero-sub"
          >
            Transformasi cara kerja yang lebih efisien dengan menguasai tools AI
            untuk produktivitas maksimal.
          </motion.p>
        </div>

        <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4, scale: 1.01 }}
            className="text-center p-6"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-[#eaefff] grid place-items-center text-2xl mb-4">
              <Image
                width={200}
                height={200}
                alt="Hemat Waktu"
                className="w-full shrink-0"
                src="/images/keuntungan-belajar/1.webp"
              />
            </div>
            <h3 className="font-semibold text-lg mb-2">Hemat Waktu</h3>
            <p className="text-sm text-black/70">
              Otomatisasi tugas dengan AI tools, hemat 70% waktu kerja.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4, scale: 1.01 }}
            className="text-center p-6"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-[#eafff2] grid place-items-center text-2xl mb-4">
              <Image
                width={200}
                height={200}
                alt="Hemat Waktu"
                className="w-full shrink-0"
                src="/images/keuntungan-belajar/2.webp"
              />
            </div>
            <h3 className="font-semibold text-lg mb-2">Skill Masa Depan</h3>
            <p className="text-sm text-black/70">
              Kuasai skill AI yang dibutuhkan di era digital dan AI.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4, scale: 1.01 }}
            className="text-center p-6"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-[#fff6db] grid place-items-center text-2xl mb-4">
              <Image
                width={200}
                height={200}
                alt="Hemat Waktu"
                className="w-full shrink-0"
                src="/images/keuntungan-belajar/3.webp"
              />
            </div>
            <h3 className="font-semibold text-lg mb-2">Output Berkualitas</h3>
            <p className="text-sm text-black/70">
              Hasil kerja yang lebih berkualitas dengan bantuan AI tools.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4, scale: 1.01 }}
            className="text-center p-6"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-[#fce7f3] grid place-items-center text-2xl mb-4">
              <Image
                width={200}
                height={200}
                alt="Hemat Waktu"
                className="w-full shrink-0"
                src="/images/keuntungan-belajar/4.webp"
              />
            </div>
            <h3 className="font-semibold text-lg mb-2">
              Kreativitas Meningkat
            </h3>
            <p className="text-sm text-black/70">
              AI tools membantu mengembangkan ide kreatif dan inovasi.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
