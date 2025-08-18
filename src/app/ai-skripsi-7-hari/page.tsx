"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };
  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };

  useEffect(() => {
    const onAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest<HTMLAnchorElement>("a[href^='#']");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        event.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    document.addEventListener("click", onAnchorClick);
    return () => document.removeEventListener("click", onAnchorClick);
  }, []);
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleWhatsAppClick = () => {
    const configuredNumber = process.env.WHATSAPP_NUMBER || "6285946885571";
    const sanitizedNumber = String(configuredNumber).replace(/[^0-9]/g, "");
    const message = encodeURIComponent(
      "Halo, saya tertarik dengan eBook Skripsi 7 Hari."
    );
    const url = `https://wa.me/${sanitizedNumber}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);
  return (
    <>
      <div className="min-h-screen w-full bg-hero">
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="w-full max-w-6xl mx-auto px-6 py-5 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-black/80 text-white grid place-items-center font-bold">
              eB
            </div>
            <span className="text-sm font-medium text-white">
              eBook Skripsi
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-white text-sm">
            <motion.a
              href="#preview"
              whileHover={{ y: -1, opacity: 0.9 }}
              whileTap={{ scale: 0.98 }}
              className="hover:underline"
            >
              Preview
            </motion.a>
            <motion.a
              href="#testimonial"
              whileHover={{ y: -1, opacity: 0.9 }}
              whileTap={{ scale: 0.98 }}
              className="hover:underline"
            >
              Testimonial
            </motion.a>
            <motion.a
              href="#bonus"
              whileHover={{ y: -1, opacity: 0.9 }}
              whileTap={{ scale: 0.98 }}
              className="hover:underline"
            >
              Bonus
            </motion.a>
            <motion.button
              type="button"
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="ml-4 btn-primary-hero rounded-full px-4 py-2"
              onClick={handleWhatsAppClick}
            >
              Beli Sekarang
            </motion.button>
          </nav>
          <button
            aria-label="Open menu"
            className="md:hidden text-white p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={22} />
          </button>
        </motion.header>
        {mobileOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.25 } }}
              className="absolute top-0 left-0 right-0 bg-[#0f172a] border-b border-white/10 px-6 py-4"
              onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                e.stopPropagation()
              }
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-black/80 text-white grid place-items-center font-bold">
                    eB
                  </div>
                  <span className="text-sm font-medium text-white">
                    eBook Skripsi
                  </span>
                </div>
                <button
                  aria-label="Close menu"
                  className="text-white p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
                  onClick={() => setMobileOpen(false)}
                >
                  <X size={22} />
                </button>
              </div>
              <div className="mt-4 grid gap-2 text-white">
                <a
                  href="#preview"
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 rounded-md hover:bg-white/10"
                >
                  Preview
                </a>
                <a
                  href="#testimonial"
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 rounded-md hover:bg-white/10"
                >
                  Testimonial
                </a>
                <a
                  href="#bonus"
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 rounded-md hover:bg-white/10"
                >
                  Bonus
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    handleWhatsAppClick();
                  }}
                  className="mt-2 btn-primary-hero inline-flex items-center justify-center rounded-full px-4 py-2"
                >
                  Beli Sekarang
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        <main id="beli" className="w-full max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10 items-center">
          <motion.section variants={stagger} initial="hidden" animate="visible">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white border border-white/20 text-xs font-medium mb-5"
            >
              <span>🚀 Fast Track</span>
              <span className="text-white/80">Gen Z Edition</span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-hero-heading font-extrabold text-white text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight"
            >
              Skripsi Kelar 7 Hari? YES, AI Can Do It! 🚀
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-base sm:text-lg md:text-xl text-white/80 font-hero-sub"
            >
              Panduan anti-baper & anti-ngaret untuk mahasiswa Gen Z, dari milih
              topik sampai kelar, semua dibantu AI.
            </motion.p>
            <div className="mt-7 flex flex-col sm:flex-row gap-4">
              <motion.a
                onClick={handleWhatsAppClick}
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary-hero rounded-xl px-5 py-3 text-base font-semibold text-center w-full sm:w-auto"
              >
                🔥 Dapatkan Sekarang
              </motion.a>
              <motion.a
                href="#preview"
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary-hero rounded-xl px-5 py-3 text-base font-semibold text-center w-full sm:w-auto"
              >
                👀 Lihat Contoh Halaman
              </motion.a>
            </div>
            <motion.div
              variants={fadeUp}
              id="bonus"
              className="mt-6 w-full inline-flex flex-col sm:flex-row sm:w-auto rounded-xl bg-white/20 text-white border border-white/20 backdrop-blur px-4 py-3"
            >
              <span>🎁 BONUS:</span>
              <span>Template Skripsi + Prompt AI Rahasia</span>
            </motion.div>
          </motion.section>

          <motion.section
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <Image
              src="/images/skripsi-mahasiswa.webp"
              width={720}
              height={720}
              alt="AI Hologram"
              className="mx-auto w-full rounded-2xl"
            />
            {/* <div className="relative w-full aspect-[4/3] rounded-2xl bg-white/70 border border-black/10 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,179,0.25),transparent_40%),_radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.22),transparent_45%)]"></div>
            <div className="absolute inset-0 grid place-items-center p-6">
              <div className="w-full max-w-xs mx-auto text-center">
              </div>
            </div>
          </div> */}
          </motion.section>
        </main>
      </div>

      <motion.section
        id="problem"
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
              Kenapa Skripsi Bikin Stress? 🤯
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 text-base sm:text-lg text-black/70 font-hero-sub"
            >
              Ada tiga alasan utama yang bikin skripsi jadi drama panjang:
            </motion.p>
          </div>

          <motion.div variants={fadeUp} className="mt-8 md:mt-12">
            <Image
              src="/images/mahasiswa-stress.webp"
              width={720}
              height={720}
              alt="AI Hologram"
              className="mx-auto w-full sm:w-1/2 rounded-2xl"
            />
            {/* <div className="rounded-2xl bg-white/90 border border-black/10 p-6 md:p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">😮‍💨</div>
                <div className="text-sm text-black/60">
                  Mahasiswa lelah + tumpukan buku
                </div>
              </div>
              <div className="h-40 rounded-xl bg-[linear-gradient(120deg,_#fef3c7_0%,_#ede9fe_50%,_#d1fae5_100%)] border border-black/10 grid place-items-center">
                <div className="w-3/4">
                  <div className="text-center text-sm mb-1 text-black/70">
                    Progress Skripsi
                  </div>
                  <div className="w-full h-3 rounded-full bg-black/10">
                    <div
                      className="h-3 rounded-full bg-[#22d3ee]"
                      style={{ width: "5%" }}
                    ></div>
                  </div>
                  <div className="text-center text-xs mt-1 text-black/50">
                    stuck di 5%
                  </div>
                </div>
              </div>
            </div> */}
          </motion.div>

          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 text-center">
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.01 }}
              className="rounded-xl p-5 bg-white border border-[#1B3C53]/10"
            >
              <div className="w-20 h-20 mx-auto">
                <Image
                  src="/images/why-section/3.webp"
                  width={500}
                  height={500}
                  alt="Ikon bingung memilih topik"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div className="mt-2 font-semibold">Bingung milih topik</div>
              <div className="mt-1 text-sm text-[#1B3C53]/70">
                Semua topik keliatan rumit, nggak ada yang cocok sama passion.
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.01 }}
              className="rounded-xl p-5 bg-white border border-[#1B3C53]/10"
            >
              <div className="w-20 h-20 mx-auto">
                <Image
                  src="/images/why-section/2.webp"
                  width={500}
                  height={500}
                  alt="Ikon ribet mencari jurnal"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div className="mt-2 font-semibold">Ribet nyari jurnal</div>
              <div className="mt-1 text-sm text-[#1B3C53]/70">
                Waktu habis cuma buat cari referensi yang valid.
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.01 }}
              className="rounded-xl p-5 bg-white border border-[#1B3C53]/10"
            >
              <div className="w-20 h-20 mx-auto">
                <Image
                  src="/images/why-section/1.webp"
                  width={500}
                  height={500}
                  alt="Ikon revisi yang tidak kelar"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div className="mt-2 font-semibold">Revisi nggak kelar-kelar</div>
              <div className="mt-1 text-sm text-[#1B3C53]/70">
                Baru selesai revisi, eh revisi lagi.
              </div>
            </motion.div>
          </div>

          <div className="mt-8 md:mt-12">
            <motion.div
              variants={fadeUp}
              className="rounded-2xl px-5 py-4 bg-white/90 border border-[#1B3C53]/10 shadow max-w-md mx-auto"
            >
              <div className="text-center font-semibold">
                &quot;Kami paham... makanya eBook ini hadir!&quot;
              </div>
              <div className="text-center text-sm text-[#1B3C53]/70 mt-1">
                😌 Tenang… semua ini bisa di-handle sama AI kalau tau caranya.
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="solution"
        className="w-full bg-solution py-16 md:py-24"
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
              Kenalin, Partner Skripsi Baru Kamu: AI 🤖
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 text-base sm:text-lg text-black/70 font-hero-sub"
            >
              7 Hari Step-by-Step skripsi kelar, full tutorial + prompt AI siap
              pakai.
            </motion.p>
          </div>

          <div className="mt-8 md:mt-12 grid md:grid-cols-[1fr_1.2fr] gap-8 md:gap-10 items-stretch">
            <motion.div variants={fadeUp}>
              <Image
                src="/images/teaching.webp"
                width={720}
                height={720}
                alt="AI Hologram"
                className="mx-auto w-full  rounded-2xl"
              />
            </motion.div>
            {/* <div className="rounded-2xl bg-white border border-black/10 p-6 md:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(124,58,237,0.18),transparent_50%),_radial-gradient(circle_at_20%_80%,rgba(0,255,179,0.2),transparent_45%)]"></div>
              <div className="relative z-[1] grid place-items-center text-center gap-3">
                <Image src="/globe.svg" alt="AI Assistant" width={110} height={110} className="mx-auto opacity-85" />
                <div className="text-sm text-black/60">AI hologram memandu mahasiswa 📚🤖</div>
                <div className="text-xs text-black/50">Ikuti timeline 7 hari sampai beres</div>
              </div>
            </div> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.01 }}
                className="rounded-xl p-5 bg-white/80 border border-black/10 hover:bg-[#a7f3d0]/40 transition-colors"
              >
                <div className="w-20 h-20">
                  <Image
                    src="/images/step-section/1.webp"
                    width={500}
                    height={500}
                    alt="Ikon Hari 1: Mindset & Tools AI"
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <div className="mt-2 text-lg">
                  <span className="font-semibold">
                    Hari 1: Mindset & Tools AI
                  </span>
                </div>
                <div className="mt-1 text-sm text-black/70">
                  Setup mindset produktif & tools AI terbaik
                </div>
              </motion.div>
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.01 }}
                className="rounded-xl p-5 bg-white/80 border border-black/10 hover:bg-[#a7f3d0]/40 transition-colors"
              >
                <div className="w-20 h-20">
                  <Image
                    src="/images/step-section/2.webp"
                    width={500}
                    height={500}
                    alt="Ikon Hari 2: Milih Topik Riset"
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <div className="mt-2 text-lg">
                  <span className="font-semibold">
                    Hari 2: Milih Topik Riset
                  </span>
                </div>
                <div className="mt-1 text-sm text-black/70">
                  Temukan topik yang relevan & unik
                </div>
              </motion.div>
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.01 }}
                className="rounded-xl p-5 bg-white/80 border border-black/10 hover:bg-[#a7f3d0]/40 transition-colors"
              >
                <div className="w-20 h-20">
                  <Image
                    src="/images/step-section/3.webp"
                    width={500}
                    height={500}
                    alt="Ikon Hari 3: Cari Literatur Otomatis"
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <div className="mt-2 text-lg">
                  <span className="font-semibold">
                    Hari 3: Cari Literatur Otomatis
                  </span>
                </div>
                <div className="mt-1 text-sm text-black/70">
                  Gunakan AI untuk filter jurnal
                </div>
              </motion.div>
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.01 }}
                className="rounded-xl p-5 bg-white/80 border border-black/10 hover:bg-[#a7f3d0]/40 transition-colors"
              >
                <div className="w-20 h-20">
                  <Image
                    src="/images/step-section/4.webp"
                    width={500}
                    height={500}
                    alt="Ikon Hari 4: Susun BAB 1"
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <div className="mt-2 text-lg">
                  <span className="font-semibold">Hari 4: Susun BAB 1</span>
                </div>
                <div className="mt-1 text-sm text-black/70">
                  Struktur pendahuluan yang solid
                </div>
              </motion.div>
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.01 }}
                className="rounded-xl p-5 bg-white/80 border border-black/10 hover:bg-[#a7f3d0]/40 transition-colors"
              >
                <div className="w-20 h-20">
                  <Image
                    src="/images/step-section/5.webp"
                    width={500}
                    height={500}
                    alt="Ikon Hari 5: Data & Olah Data"
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <div className="mt-2 text-lg">
                  <span className="font-semibold">
                    Hari 5: Data & Olah Data
                  </span>
                </div>
                <div className="mt-1 text-sm text-black/70">
                  Panduan pengumpulan & analisis data
                </div>
              </motion.div>
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.01 }}
                className="rounded-xl p-5 bg-white/80 border border-black/10 hover:bg-[#a7f3d0]/40 transition-colors"
              >
                <div className="w-20 h-20">
                  <Image
                    src="/images/step-section/6.webp"
                    width={500}
                    height={500}
                    alt="Ikon Hari 6: Susun BAB 3 & 4"
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <div className="mt-2 text-lg">
                  <span className="font-semibold">Hari 6: Susun BAB 3 & 4</span>
                </div>
                <div className="mt-1 text-sm text-black/70">
                  Metodologi & hasil riset dengan AI
                </div>
              </motion.div>
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.01 }}
                className="rounded-xl p-5 bg-white/80 border border-black/10 hover:bg-[#a7f3d0]/40 transition-colors sm:col-span-1"
              >
                <div className="w-20 h-20">
                  <Image
                    src="/images/step-section/7.webp"
                    width={500}
                    height={500}
                    alt="Ikon Hari 7: Editing & Finalisasi"
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <div className="mt-2 text-lg">
                  <span className="font-semibold">
                    Hari 7: Editing & Finalisasi
                  </span>
                </div>
                <div className="mt-1 text-sm text-black/70">
                  Grammar, plagiarisme, layout akhir
                </div>
              </motion.div>
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
              🚀 Mulai Skripsi dengan AI
            </motion.button>
          </div>
        </div>
      </motion.section>

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
              Intip Isi eBook-nya 📖
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
                <motion.div
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="relative rounded-2xl bg-white border border-black/10 shadow-lg overflow-hidden min-w-[280px] sm:min-w-[360px] md:min-w-[420px] snap-start"
                >
                  <div className="h-[300px] sm:h-[380px] md:h-[500px] bg-[linear-gradient(120deg,_#dbeafe_0%,_#ede9fe_50%,_#d1fae5_100%)] grid place-items-center">
                    <Image
                      src="/images/example-section/cover-hari-1.webp"
                      alt="Example cover day 1"
                      width={800}
                      height={600}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-medium bg-black/70 text-white">
                    Cover Hari 1
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="relative rounded-2xl bg-white border border-black/10 shadow-lg overflow-hidden min-w-[280px] sm:min-w-[360px] md:min-w-[420px] snap-start"
                >
                  <div className="h-[300px] sm:h-[380px] md:h-[500px] bg-[linear-gradient(120deg,_#fef3c7_0%,_#ede9fe_50%,_#cffafe_100%)] grid place-items-center">
                    <Image
                      src="/images/example-section/example-hari-1.webp"
                      alt="Example page day 1"
                      width={800}
                      height={600}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-medium bg-black/70 text-white">
                    Halaman eBook Hari 1
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="relative rounded-2xl bg-white border border-black/10 shadow-lg overflow-hidden min-w-[280px] sm:min-w-[360px] md:min-w-[420px] snap-start"
                >
                  <div className="h-[300px] sm:h-[380px] md:h-[500px] bg-[linear-gradient(120deg,_#ede9fe_0%,_#d1fae5_50%,_#fee2e2_100%)] grid place-items-center">
                    <Image
                      src="/images/example-section/cover-hari-2.webp"
                      alt="Example cover day 2"
                      width={800}
                      height={600}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-medium bg-black/70 text-white">
                    Cover Hari 2
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="relative rounded-2xl bg-white border border-black/10 shadow-lg overflow-hidden min-w-[280px] sm:min-w-[360px] md:min-w-[420px] snap-start"
                >
                  <div className="h-[300px] sm:h-[380px] md:h-[500px] bg-[linear-gradient(120deg,_#bae6fd_0%,_#ede9fe_50%,_#d1fae5_100%)] grid place-items-center">
                    <Image
                      src="/images/example-section/example-hari-2.webp"
                      alt="Example page day 2"
                      width={800}
                      height={600}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-medium bg-black/70 text-white">
                    Halaman eBook Hari 2
                  </div>
                </motion.div>
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
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.01 }}
              className="rounded-2xl bg-white border border-black/10 p-6 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-black/10 bg-[#f1f5f9] grid place-items-center">
                  <span className="text-xl">🧑‍🎓</span>
                </div>
                <div>
                  <div className="font-semibold">Rina</div>
                  <div className="text-sm text-black/60">Universitas A</div>
                </div>
              </div>
              <blockquote className="mt-4 italic text-black/80">
                &quot;Gila sih, skripsi 2 bulan mangkrak, kelar cuma 8
                hari!&quot;
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
                  <span className="text-xl">🧑‍🎓</span>
                </div>
                <div>
                  <div className="font-semibold">Budi</div>
                  <div className="text-sm text-black/60">Universitas B</div>
                </div>
              </div>
              <blockquote className="mt-4 italic text-black/80">
                &quot;AI-nya beneran bantu, bukan cuma teori.&quot;
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
                  <span className="text-xl">🧑‍🎓</span>
                </div>
                <div>
                  <div className="font-semibold">Alya</div>
                  <div className="text-sm text-black/60">Universitas C</div>
                </div>
              </div>
              <blockquote className="mt-4 italic text-black/80">
                &quot;Prompt yang dikasih tinggal pakai, hemat waktu
                banget.&quot;
              </blockquote>
              <div className="mt-3 text-amber-400">⭐⭐⭐⭐⭐</div>
            </motion.div>
          </div>

          <div className="mt-10">
            <motion.div
              variants={fadeUp}
              className="rounded-2xl bg-white/90 border border-[#1B3C53]/10 p-6 md:p-8 shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="font-semibold text-lg ">
                    Tersisa hanya 99K untuk akses semua materi + bonusnya!
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

      <motion.section
        id="bonus"
        className="w-full bg-bonus py-16 md:py-24"
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
              Bonus Spesial Buat Kamu 🎁
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 text-base sm:text-lg text-black/70 font-hero-sub"
            >
              Semua pembelian eBook ini akan mendapatkan bonus eksklusif yang
              bikin proses skripsi kamu makin gampang.
            </motion.p>
          </div>

          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.01 }}
              className="rounded-2xl bg-white border border-black/10 p-6 shadow-lg text-center"
            >
              <div className="w-20 h-20 mx-auto">
                <Image
                  src="/images/bonus-section/1.webp"
                  width={200}
                  height={200}
                  alt="Ikon Template Skripsi Siap Pakai"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div className="mt-3 font-semibold text-lg">
                Template Skripsi Siap Pakai
              </div>
              <div className="mt-1 text-sm text-black/70">
                Tinggal edit, sesuaiin sama topik skripsi kamu.
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.01 }}
              className="rounded-2xl bg-white border border-black/10 p-6 shadow-lg text-center"
            >
              <div className="w-20 h-20 mx-auto">
                <Image
                  src="/images/bonus-section/2.webp"
                  width={200}
                  height={200}
                  alt="Ikon Daftar Prompt AI Skripsi"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div className="mt-3 font-semibold text-lg">
                Daftar Prompt AI Skripsi
              </div>
              <div className="mt-1 text-sm text-black/70">
                Prompt siap pakai untuk milih topik, cari jurnal, dan nulis Bab.
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.01 }}
              className="rounded-2xl bg-white border border-black/10 p-6 shadow-lg text-center"
            >
              <div className="w-20 h-20 mx-auto">
                <Image
                  src="/images/bonus-section/3.webp"
                  width={200}
                  height={200}
                  alt="Ikon Panduan Bebas Plagiarisme"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div className="mt-3 font-semibold text-lg">
                Panduan Bebas Plagiarisme
              </div>
              <div className="mt-1 text-sm text-black/70">
                Tips & trik lolos uji Turnitin tanpa drama.
              </div>
            </motion.div>
          </div>

          <div className="mt-10">
            <motion.div
              variants={fadeUp}
              className="rounded-2xl bg-[#fff6b3] border border-[#1B3C53]/10 p-6 md:p-8 shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="font-semibold text-lg">
                    💎 Total value Rp 500.000, sekarang cuma 99K!
                  </div>
                  <div className="text-sm text-[#1B3C53]/70">
                    Dapatkan semua bonus + eBook dalam sekali beli.
                  </div>
                </div>
                <div>
                  <motion.button
                    type="button"
                    whileHover={{ y: -2, scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary-hero inline-flex rounded-xl px-6 py-3 text-base font-semibold text-center w-full sm:w-auto"
                    onClick={handleWhatsAppClick}
                  >
                    🔥 Ambil Semua Bonus & eBook Sekarang
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

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
              Jangan Tunggu Sampai Deadline Mepet! 🚀
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 text-base sm:text-lg text-white/90 font-hero-sub"
            >
              Skripsimu bisa kelar minggu ini juga kalau mulai sekarang.
            </motion.p>
            <motion.ul
              variants={fadeUp}
              className="mt-6 space-y-3 text-white/90"
            >
              <li>
                ✅ <span className="font-semibold">eBook Lengkap</span> 7 Hari
                Kelar Skripsi
              </li>
              <li>
                ✅ <span className="font-semibold">Bonus</span> Template, Prompt
                AI, & Panduan Anti Plagiarisme
              </li>
              <li>
                ✅ <span className="font-semibold">Akses Instan</span>
              </li>
            </motion.ul>
            <div className="mt-7">
              <motion.button
                type="button"
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary-hero text-center rounded-2xl px-7 py-4 text-lg font-bold inline-block w-full sm:w-auto"
                onClick={handleWhatsAppClick}
              >
                🔥 Mulai Skripsi Sekarang
              </motion.button>
              <div className="text-xs text-white/80 mt-2">
                *Harga promo cuma berlaku hari ini
              </div>
            </div>
          </div>
          <motion.div variants={fadeUp} className="relative">
            <Image
              src="/images/trophy.webp"
              width={720}
              height={720}
              alt="AI Hologram"
              className="mx-auto w-full  rounded-2xl"
            />
            {/* <div className="relative w-full aspect-[4/3] rounded-2xl bg-white/70 border border-black/10 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.45),transparent_40%),_radial-gradient(circle_at_80%_70%,rgba(124,58,237,0.25),transparent_45%),_radial-gradient(circle_at_60%_20%,rgba(16,185,129,0.22),transparent_45%)]"></div>
              <div className="absolute inset-0 grid place-items-center p-6">
                <div className="w-full max-w-xs mx-auto text-center">
                  <div className="text-6xl">🤖🏆</div>
                  <div className="mt-3 text-sm text-black/60">AI kasih trofi ke mahasiswa yang kelar skripsi 🎉</div>
                  <div className="mt-1 text-xs text-black/50">Aksen confetti lembut di latar</div>
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
