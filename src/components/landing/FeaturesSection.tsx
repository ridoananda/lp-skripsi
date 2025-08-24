"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import Image from "next/image";

export default function FeaturesSection() {
  return (
    <motion.section
      id="fitur"
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
            Fitur Unggulan AI Tools Learning
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 text-base sm:text-lg text-black/70 font-hero-sub"
          >
            Teknologi dan fitur yang membuat belajar tools AI jadi lebih efektif dan produktif.
          </motion.p>
        </div>

        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <motion.div variants={fadeUp} className="space-y-6">
            <div className="flex items-start gap-4">
              <Image
                src="/images/fitur-unggulan/1.webp"
                alt="Hands-on Practice"
                className="w-12 h-12 rounded-xl grid place-items-center flex-shrink-0"
                width={100}
                height={100}
              />
              <div>
                <h3 className="font-semibold text-lg">Hands-on Practice</h3>
                <p className="text-sm text-black/70 mt-1">Latihan langsung menggunakan tools AI seperti ChatGPT, Midjourney, dan tools produktivitas lainnya.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Image
                src="/images/fitur-unggulan/2.webp"
                alt="Use Case Examples"
                className="w-12 h-12 rounded-xl grid place-items-center flex-shrink-0"
                width={100}
                height={100}
              />
              <div>
                <h3 className="font-semibold text-lg">Use Case Examples</h3>
                <p className="text-sm text-black/70 mt-1">Contoh nyata penggunaan AI tools untuk berbagai bidang pekerjaan dan kehidupan sehari-hari.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Image
                src="/images/fitur-unggulan/3.webp"
                alt="Prompt Engineering"
                className="w-12 h-12 rounded-xl grid place-items-center flex-shrink-0"
                width={100}
                height={100}
              />
              <div>
                <h3 className="font-semibold text-lg">Prompt Engineering</h3>
                <p className="text-sm text-black/70 mt-1">Belajar cara menulis prompt yang efektif untuk mendapatkan hasil optimal dari AI tools.</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-6">
            <div className="flex items-start gap-4">
              <Image
                src="/images/fitur-unggulan/4.webp"
                alt="AI Workflow Integration"
                className="w-12 h-12 rounded-xl grid place-items-center flex-shrink-0"
                width={100}
                height={100}
              />
              <div>
                <h3 className="font-semibold text-lg">AI Workflow Integration</h3>
                <p className="text-sm text-black/70 mt-1">Cara mengintegrasikan AI tools ke dalam workflow kerja sehari-hari untuk efisiensi maksimal.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Image
                src="/images/fitur-unggulan/5.webp"
                alt="Productivity Hacks"
                className="w-12 h-12 rounded-xl grid place-items-center flex-shrink-0"
                width={100}
                height={100}
              />
              <div>
                <h3 className="font-semibold text-lg">Productivity Hacks</h3>
                <p className="text-sm text-black/70 mt-1">Tips dan trik menggunakan AI untuk menghemat waktu dan meningkatkan output kerja.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Image
                src="/images/fitur-unggulan/6.webp"
                alt="AI Tools Comparison"
                className="w-12 h-12 rounded-xl grid place-items-center flex-shrink-0"
                width={100}
                height={100}
              />
              <div>
                <h3 className="font-semibold text-lg">AI Tools Comparison</h3>
                <p className="text-sm text-black/70 mt-1">Perbandingan berbagai AI tools untuk membantu memilih yang paling sesuai dengan kebutuhan.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
