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
            <Image
              src="/images/logo.webp"
              width={44}
              height={44}
              alt="Bantuan AI logo"
              className="w-10 h-10 object-cover rounded-lg"
              quality={100}
              priority
              loading="eager"
              fetchPriority="high"
              sizes="44px"
            />
            <span className="text-sm font-medium text-white">Bantuan AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-white text-sm">
            <motion.a
              href="#nilai"
              whileHover={{ y: -1, opacity: 0.9 }}
              whileTap={{ scale: 0.98 }}
              className="hover:underline"
            >
              Nilai
            </motion.a>
            <motion.a
              href="#fitur"
              whileHover={{ y: -1, opacity: 0.9 }}
              whileTap={{ scale: 0.98 }}
              className="hover:underline"
            >
              Fitur
            </motion.a>
            <motion.a
              href="#keuntungan"
              whileHover={{ y: -1, opacity: 0.9 }}
              whileTap={{ scale: 0.98 }}
              className="hover:underline"
            >
              Keuntungan
            </motion.a>
            <motion.a
              href="#statistik"
              whileHover={{ y: -1, opacity: 0.9 }}
              whileTap={{ scale: 0.98 }}
              className="hover:underline"
            >
              Statistik
            </motion.a>
            <motion.a
              href="#produk"
              whileHover={{ y: -1, opacity: 0.9 }}
              whileTap={{ scale: 0.98 }}
              className="hover:underline"
            >
              Produk
            </motion.a>
            <motion.a
              href="#testimoni"
              whileHover={{ y: -1, opacity: 0.9 }}
              whileTap={{ scale: 0.98 }}
              className="hover:underline"
            >
              Testimoni
            </motion.a>
            <motion.a
              href="#cta"
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="ml-2 btn-primary-hero rounded-full px-4 py-2"
            >
              Mulai Sekarang
            </motion.a>
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
                  <Image
                    src="/images/logo.webp"
                    width={44}
                    height={44}
                    alt="Bantuan AI logo"
                    className="w-10 h-10 object-cover rounded-lg"
                    quality={100}
                    priority
                    loading="eager"
                    fetchPriority="high"
                    sizes="44px"
                  />
                  <span className="text-sm font-medium text-white">
                    Bantuan AI
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
                  href="#nilai"
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 rounded-md hover:bg-white/10"
                >
                  Nilai
                </a>
                <a
                  href="#fitur"
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 rounded-md hover:bg-white/10"
                >
                  Fitur
                </a>
                <a
                  href="#keuntungan"
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 rounded-md hover:bg-white/10"
                >
                  Keuntungan
                </a>
                <a
                  href="#statistik"
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 rounded-md hover:bg-white/10"
                >
                  Statistik
                </a>
                <a
                  href="#produk"
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 rounded-md hover:bg-white/10"
                >
                  Produk
                </a>
                <a
                  href="#testimoni"
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 rounded-md hover:bg-white/10"
                >
                  Testimoni
                </a>
                <a
                  href="#faq"
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 rounded-md hover:bg-white/10"
                >
                  FAQ
                </a>
                <a
                  href="#cta"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 btn-primary-hero inline-flex items-center justify-center rounded-full px-4 py-2"
                >
                  Mulai Sekarang
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}

        <main className="w-full max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10 items-center">
          <motion.section variants={stagger} initial="hidden" animate="visible">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white border border-white/20 text-xs font-medium mb-5"
            >
              <span>💡 Belajar Cerdas</span>
              <span className="text-white/80">Dibantu AI</span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-hero-heading font-extrabold text-white text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight"
            >
              Belajar Lebih Cepat, Lebih Pintar, dengan Bantuan AI
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-base sm:text-lg md:text-xl text-white/80 font-hero-sub"
            >
              Bantuan AI adalah wadah edukasi digital yang menghadirkan e-book dan iCourse interaktif berbasis AI.
            </motion.p>
            <div className="mt-7 flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#produk"
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary-hero rounded-xl px-5 py-3 text-base font-semibold text-center w-full sm:w-auto"
              >
                🚀 Mulai perjalananmu
              </motion.a>
              <motion.a
                href="/ai-skripsi-7-hari"
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary-hero rounded-xl px-5 py-3 text-base font-semibold text-center w-full sm:w-auto"
              >
                📚 Lihat E-book
              </motion.a>
            </div>
            <motion.div
              variants={fadeUp}
              className="mt-6 w-full inline-flex flex-col sm:flex-row sm:w-auto rounded-xl bg-white/20 text-white border border-white/20 backdrop-blur px-4 py-3"
            >
              <span>✨ Fokus: Materi nyata, ringkas, dan interaktif.</span>
            </motion.div>
          </motion.section>

          <motion.section
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <Image
              src="/images/teaching.webp"
              width={720}
              height={720}
              alt="Ilustrasi belajar dengan bantuan AI"
              className="mx-auto w-full rounded-2xl"
              priority
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 768px) 364px, 400px"
            />
          </motion.section>
        </main>
      </div>

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
              Kenapa Bantuan AI?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 text-base sm:text-lg text-black/70 font-hero-sub"
            >
              Nilai yang kamu dapat saat belajar bersama AI.
            </motion.p>
          </div>

          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.01 }}
              className="rounded-2xl bg-white border border-black/10 p-6 shadow-lg"
            >
              <div className="w-16 h-16 rounded-xl bg-[#eaefff] grid place-items-center text-2xl">📚</div>
              <div className="mt-3 font-semibold text-lg">E-book Digital</div>
              <div className="mt-1 text-sm text-[#1B3C53]/70">
                Materi praktis, ringkas, dan mudah dipahami.
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.01 }}
              className="rounded-2xl bg-white border border-black/10 p-6 shadow-lg"
            >
              <div className="w-16 h-16 rounded-xl bg-[#eafff2] grid place-items-center text-2xl">🎓</div>
              <div className="mt-3 font-semibold text-lg">iCourse AI</div>
              <div className="mt-1 text-sm text-[#1B3C53]/70">
                Belajar interaktif, langsung dibimbing AI.
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.01 }}
              className="rounded-2xl bg-white border border-black/10 p-6 shadow-lg"
            >
              <div className="w-16 h-16 rounded-xl bg-[#fff6db] grid place-items-center text-2xl">🚀</div>
              <div className="mt-3 font-semibold text-lg">Solusi Tepat</div>
              <div className="mt-1 text-sm text-[#1B3C53]/70">
                Disusun untuk kebutuhan nyata, bukan sekadar teori.
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

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
              Fitur Unggulan AI Learning
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 text-base sm:text-lg text-black/70 font-hero-sub"
            >
              Teknologi AI yang membuat belajar jadi lebih efektif dan menyenangkan.
            </motion.p>
          </div>

          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <motion.div variants={fadeUp} className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#eaefff] grid place-items-center text-xl flex-shrink-0">🤖</div>
                <div>
                  <h3 className="font-semibold text-lg">AI Personal Assistant</h3>
                  <p className="text-sm text-black/70 mt-1">AI yang memahami gaya belajar kamu dan memberikan rekomendasi yang tepat.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#eafff2] grid place-items-center text-xl flex-shrink-0">📊</div>
                <div>
                  <h3 className="font-semibold text-lg">Progress Tracking</h3>
                  <p className="text-sm text-black/70 mt-1">Monitor kemajuan belajar dengan analisis detail dan insight yang akurat.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#fff6db] grid place-items-center text-xl flex-shrink-0">🎯</div>
                <div>
                  <h3 className="font-semibold text-lg">Adaptive Learning</h3>
                  <p className="text-sm text-black/70 mt-1">Materi yang menyesuaikan dengan kemampuan dan kecepatan belajar kamu.</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#fef3c7] grid place-items-center text-xl flex-shrink-0">💬</div>
                <div>
                  <h3 className="font-semibold text-lg">Interactive Chat</h3>
                  <p className="text-sm text-black/70 mt-1">Tanya jawab langsung dengan AI untuk pemahaman yang lebih mendalam.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#fce7f3] grid place-items-center text-xl flex-shrink-0">📱</div>
                <div>
                  <h3 className="font-semibold text-lg">Multi-Platform</h3>
                  <p className="text-sm text-black/70 mt-1">Akses dari mana saja, desktop, tablet, atau smartphone.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#dbeafe] grid place-items-center text-xl flex-shrink-0">⚡</div>
                <div>
                  <h3 className="font-semibold text-lg">Real-time Updates</h3>
                  <p className="text-sm text-black/70 mt-1">Konten yang selalu fresh dan up-to-date dengan perkembangan terbaru.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

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
              Keuntungan Belajar dengan AI
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 text-base sm:text-lg text-black/70 font-hero-sub"
            >
              Transformasi cara belajar yang lebih efisien dan hasil yang maksimal.
            </motion.p>
          </div>

          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.01 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-[#eaefff] grid place-items-center text-2xl mb-4">⏰</div>
              <h3 className="font-semibold text-lg mb-2">Hemat Waktu</h3>
              <p className="text-sm text-black/70">Belajar 3x lebih cepat dengan bantuan AI yang efisien.</p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.01 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-[#eafff2] grid place-items-center text-2xl mb-4">🎯</div>
              <h3 className="font-semibold text-lg mb-2">Fokus Optimal</h3>
              <p className="text-sm text-black/70">Materi yang disesuaikan dengan kebutuhan dan kemampuan kamu.</p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.01 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-[#fff6db] grid place-items-center text-2xl mb-4">📈</div>
              <h3 className="font-semibold text-lg mb-2">Hasil Maksimal</h3>
              <p className="text-sm text-black/70">Pencapaian belajar yang lebih tinggi dengan metode yang tepat.</p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.01 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-[#fce7f3] grid place-items-center text-2xl mb-4">💡</div>
              <h3 className="font-semibold text-lg mb-2">Pemahaman Mendalam</h3>
              <p className="text-sm text-black/70">Konsep yang dipahami dengan baik, bukan sekadar hafalan.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

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
              Angka yang Membuktikan
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 text-base sm:text-lg text-white/80 font-hero-sub"
            >
              Hasil nyata dari ribuan pembelajar yang telah merasakan manfaat AI.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div variants={fadeUp} className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-white">10K+</div>
              <div className="text-sm text-white/70">Pembelajar Aktif</div>
            </motion.div>
            <motion.div variants={fadeUp} className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-white">95%</div>
              <div className="text-sm text-white/70">Tingkat Kepuasan</div>
            </motion.div>
            <motion.div variants={fadeUp} className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-white">3x</div>
              <div className="text-sm text-white/70">Lebih Cepat Paham</div>
            </motion.div>
            <motion.div variants={fadeUp} className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-white">24/7</div>
              <div className="text-sm text-white/70">Dukungan AI</div>
            </motion.div>
          </div>
        </div>
      </motion.section>

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
              Mulai perjalanan belajarmu sekarang. Pilih e-book atau iCourse yang sesuai dengan kebutuhanmu.
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
                  src="/images/skripsi-mahasiswa.webp"
                      width={800}
                  height={500}
                  alt="E-book Digital"
                  className="w-full h-full object-cover"
                    />
                  </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-lg">E-book Digital</div>
                  <div className="text-sm text-black/70">Materi ringkas. Contoh siap pakai.</div>
                  </div>
                <a href="/ai-skripsi-7-hari" className="btn-primary-hero rounded-full px-4 py-2 text-sm font-semibold">Pilih E-book</a>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.01 }}
              className="rounded-2xl bg-white border border-black/10 p-6 shadow-lg"
              id="icourse"
                >
              <div className="aspect-[16/10] rounded-xl overflow-hidden bg-[#ecfeff] grid place-items-center">
                    <Image
                  src="/images/teaching.webp"
                      width={800}
                  height={500}
                  alt="iCourse AI Interaktif"
                  className="w-full h-full object-cover"
                    />
                  </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-lg">iCourse AI Interaktif</div>
                  <div className="text-sm text-black/70">Belajar dua arah. Praktik langsung.</div>
                  </div>
                <a href="#cta" className="btn-secondary-hero rounded-full px-4 py-2 text-sm font-semibold">Lihat Detail</a>
                  </div>
                </motion.div>
          </div>
        </div>
      </motion.section>

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
              className="font-hero-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#1B3C53]"
            >
              FAQ
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 text-base sm:text-lg text-black/70 font-hero-sub"
            >
              Pertanyaan yang sering ditanyakan.
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
                  <h3 className="font-semibold text-lg">Apa itu Bantuan AI?</h3>
                  <p className="text-sm text-black/70 mt-1">Bantuan AI adalah platform edukasi digital yang menghadirkan e-book dan iCourse interaktif berbasis AI untuk membantu pembelajaran.</p>
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
                  <h3 className="font-semibold text-lg">Apa keunggulan iCourse AI?</h3>
                  <p className="text-sm text-black/70 mt-1">iCourse AI menawarkan pembelajaran interaktif, langsung dibimbing AI, dan memiliki fitur adaptive learning untuk menyesuaikan dengan kemampuan belajar kamu.</p>
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
                  <h3 className="font-semibold text-lg">Apa manfaat AI untuk belajar?</h3>
                  <p className="text-sm text-black/70 mt-1">AI dapat membantu pemahaman materi dengan lebih cepat dan efisien, memberikan rekomendasi yang tepat, dan membantu kamu fokus pada materi yang penting.</p>
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
                  <h3 className="font-semibold text-lg">Apakah Bantuan AI tersedia di berbagai platform?</h3>
                  <p className="text-sm text-black/70 mt-1">Bantuan AI tersedia melalui website dan aplikasi mobile, memudahkan akses dari mana saja, kapan saja.</p>
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
              Mulai perjalanan belajarmu sekarang
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 text-base sm:text-lg text-white/90 font-hero-sub"
            >
              Pilih e-book atau iCourse yang sesuai dengan kebutuhanmu.
            </motion.p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <motion.a
                href="/ai-skripsi-7-hari"
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary-hero text-center rounded-2xl px-7 py-4 text-base font-bold inline-block w-full sm:w-auto"
              >
                📚 Pilih E-book
              </motion.a>
              <motion.a
                href="#icourse"
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary-hero text-center rounded-2xl px-7 py-4 text-base font-bold inline-block w-full sm:w-auto"
              >
                🎓 Lihat iCourse
              </motion.a>
            </div>
          </div>
          <motion.div variants={fadeUp} className="relative">
            <Image
              src="/images/trophy.webp"
              width={720}
              height={720}
              alt="Ilustrasi pencapaian belajar"
              className="mx-auto w-full rounded-2xl"
              sizes="(max-width: 768px) 364px, 400px"
            />
          </motion.div>
        </div>
      </motion.section>

      <motion.footer
        className="w-full bg-[#0f172a] text-white py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <motion.div variants={fadeUp} className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/logo.webp"
                  width={44}
                  height={44}
                  alt="Bantuan AI logo"
                  className="w-10 h-10 object-cover rounded-lg"
                  quality={100}
                  sizes="44px"
                />
                <span className="text-lg font-semibold">Bantuan AI</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Wadah edukasi digital yang menghadirkan e-book dan iCourse interaktif berbasis AI untuk membantu pembelajaran yang lebih efektif dan menyenangkan.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={fadeUp}>
              <h3 className="font-semibold text-lg mb-4">Produk</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/ai-skripsi-7-hari" className="text-white/70 hover:text-white transition-colors">E-book Skripsi</a></li>
                <li><a href="#icourse" className="text-white/70 hover:text-white transition-colors">iCourse AI</a></li>
                <li><a href="#fitur" className="text-white/70 hover:text-white transition-colors">Fitur</a></li>
                <li><a href="#keuntungan" className="text-white/70 hover:text-white transition-colors">Keuntungan</a></li>
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div variants={fadeUp}>
              <h3 className="font-semibold text-lg mb-4">Kontak</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-white/70">Email: info@bantuanai.com</li>
                <li className="text-white/70">WhatsApp: +62 859-4688-5571</li>
                <li className="text-white/70">Jam Kerja: Senin-Jumat 9:00-17:00</li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div 
            variants={fadeUp}
            className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="text-sm text-white/60">
              © 2024 Bantuan AI. Semua hak cipta dilindungi.
            </div>
            <div className="flex items-center gap-4 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </>
  );
}
