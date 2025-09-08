"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { getWhatsAppUrl } from "@/lib/constants";

const previewImages = [
  {
    src: "/images/example-section/cover-hari-1.webp",
    alt: "E-book cover day 1",
    label: "Cover Hari 1",
    gradient: "linear-gradient(120deg, #dbeafe 0%, #ede9fe 50%, #d1fae5 100%)",
  },
  {
    src: "/images/example-section/cover-hari-2.webp",
    alt: "E-book cover day 2",
    label: "Cover Hari 2",
    gradient: "linear-gradient(120deg, #fef3c7 0%, #ede9fe 50%, #cffafe 100%)",
  },
  {
    src: "/images/example-section/cover-hari-3.webp",
    alt: "E-book cover day 3",
    label: "Cover Hari 3",
    gradient: "linear-gradient(120deg, #ede9fe 0%, #d1fae5 50%, #fee2e2 100%)",
  },
  {
    src: "/images/example-section/cover.webp",
    alt: "E-book main cover",
    label: "Cover",
    gradient: "linear-gradient(120deg, #bae6fd 0%, #ede9fe 50%, #d1fae5 100%)",
  },
];

export default function Preview() {
  const handleWhatsAppClick = () => {
    const url = getWhatsAppUrl();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.section
      id="preview"
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
            Intip Isi E-book-nya 📖
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 text-base sm:text-lg text-black/70 font-hero-sub"
          >
            Lihat cuplikan halaman, template, dan prompt AI yang bakal kamu
            dapatkan.
          </motion.p>
        </div>

        <div className="mt-8 md:mt-12">
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-3 text-sm text-[#1B3C53]/60"
          >
            <span>⬅️</span>
            <span>Geser untuk melihat lainnya</span>
            <span>➡️</span>
          </motion.div>
          <div className="mt-5 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex gap-4 md:gap-6 snap-x pb-4 pt-2 snap-mandatory">
              {previewImages.map((image, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="relative rounded-2xl bg-white border border-black/10 shadow-lg overflow-hidden min-w-[280px] sm:min-w-[360px] md:min-w-[420px] snap-start"
                >
                  <div
                    className="h-[300px] sm:h-[380px] md:h-[500px] grid place-items-center"
                    style={{ background: image.gradient }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={600}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-medium bg-black/70 text-white">
                    {image.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <motion.button
            type="button"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary-hero rounded-xl px-6 py-3 text-base font-semibold text-center"
            onClick={handleWhatsAppClick}
          >
            📥 Download Sekarang
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}
