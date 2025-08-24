"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import Image from "next/image";

export default function ValuesSection() {
  return (
    <motion.section
      id="nilai"
      className="w-full bg-[#e6eef4] py-16 md:py-24"
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
            Kenapa Belajar Tools AI?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 text-base sm:text-lg text-black/70 font-hero-sub"
          >
            Karena dunia nggak lagi sama. Dengan menguasai tools AI, kamu bukan
            cuma sekadar ikut tren, tapi benar-benar membuka jalan buat hidup
            yang lebih produktif dan efisien. Yuk Simak nilai yang kamu dapatkan
          </motion.p>
        </div>

        <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4, scale: 1.01 }}
            className="rounded-2xl bg-white border border-black/10 p-6 shadow-lg"
          >
            <div className="w-16 h-16 rounded-xl bg-[#eaefff] grid place-items-center text-2xl">
              <Image
                width={200}
                height={200}
                alt="Tools AI Praktis"
                className="w-full shrink-0"
                src="/images/kenapa-belajar-tools-ai/1.webp"
              />
            </div>
            <div className="mt-3 font-semibold text-lg">Tools AI Praktis</div>
            <div className="mt-1 text-sm text-[#1B3C53]/70">
              Kerjaan yang bikin stress jadi beres dalam menit. Semua karena
              tahu cara pakai AI dengan benar.
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4, scale: 1.01 }}
            className="rounded-2xl bg-white border border-black/10 p-6 shadow-lg"
          >
            <div className="w-16 h-16 rounded-xl bg-[#eafff2] grid place-items-center text-2xl">
              <Image
                width={200}
                height={200}
                alt="Pemahaman AI"
                className="w-full shrink-0"
                src="/images/kenapa-belajar-tools-ai/2.webp"
              />
            </div>
            <div className="mt-3 font-semibold text-lg">Pemahaman AI</div>
            <div className="mt-1 text-sm text-[#1B3C53]/70">
              AI ada di mana-mana, tapi yang paham cara kerjanya bisa jadi
              pemimpin perubahan, bukan cuma pengikut.
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4, scale: 1.01 }}
            className="rounded-2xl bg-white border border-black/10 p-6 shadow-lg"
          >
            <div className="w-16 h-16 rounded-xl bg-[#fff6db] grid place-items-center text-2xl">
              <Image
                width={200}
                height={200}
                alt="Produktivitas Maksimal"
                className="w-full shrink-0"
                src="/images/kenapa-belajar-tools-ai/3.webp"
              />
            </div>
            <div className="mt-3 font-semibold text-lg">
              Produktivitas Maksimal
            </div>
            <div className="mt-1 text-sm text-[#1B3C53]/70">
              Kerja nggak harus ribet. Pake tools AI yang pas, bikin tugas cepet
              kelar dan waktu luang makin banyak.
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
