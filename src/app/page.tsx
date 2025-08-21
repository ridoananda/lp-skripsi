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
      "Halo, saya mau konsultasi gratis transformasi bisnis + AI."
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
            <Image
              src="/images/logo.webp"
              width={44}
              height={44}
              alt="Logo agensi AI"
              className="w-10 h-10 object-cover rounded-lg"
              quality={100}
              priority
              loading="eager"
              fetchPriority="high"
              sizes="44px"
            />
            <span className="text-sm font-medium text-white">Integrasia</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-white text-sm">
            <motion.a
              href="#solusi"
              whileHover={{ y: -1, opacity: 0.9 }}
              whileTap={{ scale: 0.98 }}
              className="hover:underline"
            >
              Solusi
            </motion.a>
            <motion.a
              href="#layanan"
              whileHover={{ y: -1, opacity: 0.9 }}
              whileTap={{ scale: 0.98 }}
              className="hover:underline"
            >
              Layanan
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
              href="#testimonial"
              whileHover={{ y: -1, opacity: 0.9 }}
              whileTap={{ scale: 0.98 }}
              className="hover:underline"
            >
              Testimoni
            </motion.a>
            <motion.button
              type="button"
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="ml-2 btn-primary-hero rounded-full px-4 py-2"
              onClick={handleWhatsAppClick}
            >
              Konsultasi Gratis
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
              onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/logo.webp"
                    width={44}
                    height={44}
                    alt="Logo agensi AI"
                    className="w-10 h-10 object-cover rounded-lg"
                    quality={100}
                    priority
                    loading="eager"
                    fetchPriority="high"
                    sizes="44px"
                  />
                  <span className="text-sm font-medium text-white">Integrasia</span>
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
                <a href="#solusi" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-md hover:bg-white/10">Solusi</a>
                <a href="#layanan" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-md hover:bg-white/10">Layanan</a>
                <a href="#produk" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-md hover:bg-white/10">Produk</a>
                <a href="#testimonial" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-md hover:bg-white/10">Testimoni</a>
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    handleWhatsAppClick();
                  }}
                  className="mt-2 btn-primary-hero inline-flex items-center justify-center rounded-full px-4 py-2"
                >
                  Konsultasi Gratis
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        <main className="w-full max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10 items-center">
          <motion.section variants={stagger} initial="hidden" animate="visible">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white border border-white/20 text-xs font-medium mb-5 hero-badge"
            >
              <span>🤖 Integrasi AI</span>
              <span className="text-white/80">Strategi • Implementasi • Training</span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-hero-heading font-extrabold text-white text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight"
            >
              Transformasi Bisnis Digital Terintegrasi AI
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-base sm:text-lg md:text-xl text-white/80 font-hero-sub"
            >
              Automasi operasional, chatbot WhatsApp pintar, dan dashboard KPI yang
              mendorong omzet—dalam hitungan minggu.
            </motion.p>
            <div className="mt-7 flex flex-col sm:flex-row gap-4">
              <motion.button
                type="button"
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary-hero rounded-xl px-5 py-3 text-base font-semibold text-center w-full sm:w-auto"
                onClick={handleWhatsAppClick}
              >
                🚀 Konsultasi Gratis via WhatsApp
              </motion.button>
              <motion.a
                href="#layanan"
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary-hero rounded-xl px-5 py-3 text-base font-semibold text-center w-full sm:w-auto"
              >
                Lihat Paket & Harga
              </motion.a>
            </div>
            <motion.div
              variants={fadeUp}
              className="mt-6 w-full inline-flex flex-col sm:flex-row sm:w-auto rounded-xl bg-white/20 text-white border border-white/20 backdrop-blur px-4 py-3"
            >
              <span>📈 Fokus Hasil:</span>
              <span className="sm:ml-2">Lead naik • Biaya turun • Waktu proses lebih singkat</span>
            </motion.div>
          </motion.section>
          <motion.section variants={fadeUp} initial="hidden" animate="visible" className="relative">
            <Image
              src="/images/teaching.webp"
              width={720}
              height={720}
              alt="Ilustrasi integrasi AI untuk bisnis"
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
        id="solusi"
        className="w-full bg-[#e6eef4] py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2 variants={fadeUp} className="font-hero-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#1B3C53]">
              Solusi yang Kami Tawarkan
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-base sm:text-lg text-black/70 font-hero-sub">
              Dari otomasi alur kerja, chatbot WhatsApp, hingga dashboard KPI—semua terintegrasi dan siap dipakai tim.
            </motion.p>
          </div>

          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { img: "/images/step-section/1.webp", title: "Otomasi & Workflow", desc: "Proses order, follow-up, laporan—otomatis dan terukur." },
              { img: "/images/step-section/2.webp", title: "Chatbot WhatsApp", desc: "Asisten CS/Sales dengan routing & integrasi CRM." },
              { img: "/images/step-section/3.webp", title: "Dashboard KPI", desc: "Satu tampilan untuk metrik utama bisnis Anda." },
              { img: "/images/step-section/4.webp", title: "Integrasi Sistem", desc: "Hubungkan CRM, toko online, Google Sheet, Notion, dll." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -4, scale: 1.01 }} className="rounded-xl p-5 bg-white border border-black/10">
                <div className="w-20 h-20">
                  <Image src={item.img} width={80} height={80} alt={item.title} className="w-20 h-20 object-contain" sizes="80px" />
                </div>
                <div className="mt-2 font-semibold">{item.title}</div>
                <div className="mt-1 text-sm text-black/70">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="layanan"
        className="w-full bg-solution py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2 variants={fadeUp} className="font-hero-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#1B3C53]">
              Paket Layanan
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-base sm:text-lg text-black/70 font-hero-sub">
              Mulai dari quick wins 2–4 minggu hingga integrasi penuh sesuai kebutuhan bisnis.
            </motion.p>
          </div>

          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { title: "Starter Automation", bullets: ["2–3 alur utama", "SOP + training", "Laporan impact"], img: "/images/step-section/5.webp" },
              { title: "Conversational AI", bullets: ["Chatbot WA", "Knowledge base", "Integrasi CRM"], img: "/images/step-section/6.webp" },
              { title: "Growth Analytics", bullets: ["Dashboard KPI", "Alert & insight", "Workshop tim"], img: "/images/step-section/7.webp" },
              { title: "Custom Integration", bullets: ["CRM/ecommerce", "RPA & API", "Roadmap 90 hari"], img: "/images/step-section/4.webp" },
            ].map((p, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -4, scale: 1.01 }} className="rounded-2xl bg-white/90 border border-black/10 p-6 shadow-lg">
                <div className="w-16 h-16">
                  <Image src={p.img} width={64} height={64} alt={p.title} className="w-16 h-16 object-contain" sizes="64px" />
                </div>
                <div className="mt-3 font-semibold text-lg">{p.title}</div>
                <ul className="mt-2 text-sm text-black/70 list-disc pl-5 space-y-1">
                  {p.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                <div className="mt-4">
                  <button onClick={handleWhatsAppClick} className="btn-primary-hero rounded-xl px-4 py-2 text-sm font-semibold">Minta Estimasi</button>
                </div>
              </motion.div>
            ))}
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
            <motion.h2 variants={fadeUp} className="font-hero-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#1B3C53]">
              Produk Digital
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-base sm:text-lg text-black/70 font-hero-sub">
              Pelajari playbook-nya atau biar kami implementasikan untuk Anda.
            </motion.p>
          </div>

          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {[
              { img: "/images/bonus-section/1.webp", title: "AI Playbook untuk UKM", desc: "Kerangka strategi + checklist implementasi." },
              { img: "/images/bonus-section/2.webp", title: "Prompt Pack Sales/CS", desc: "Siap pakai untuk closing & pelayanan cepat." },
              { img: "/images/bonus-section/3.webp", title: "Template SOP Otomasi", desc: "Pastikan solusi dipakai konsisten oleh tim." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -4, scale: 1.01 }} className="rounded-2xl bg-white border border-black/10 p-6 shadow-lg text-center">
                <div className="w-20 h-20 mx-auto">
                  <Image src={item.img} width={80} height={80} alt={item.title} className="w-20 h-20 object-contain" sizes="80px" />
                </div>
                <div className="mt-3 font-semibold text-lg">{item.title}</div>
                <div className="mt-1 text-sm text-black/70">{item.desc}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <motion.button type="button" whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.98 }} className="btn-primary-hero rounded-xl px-6 py-3 text-base font-semibold text-center" onClick={handleWhatsAppClick}>
              📥 Tanya Paket Produk Digital
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
            <motion.h2 variants={fadeUp} className="font-hero-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#1B3C53]">
              Testimoni Klien
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-base sm:text-lg text-black/70 font-hero-sub">
              Cerita singkat dari bisnis yang sudah meningkatkan efisiensi dan omzet dengan integrasi AI.
            </motion.p>
          </div>

          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { name: "Sari Bakery", quote: "Respon WA otomatis, pesanan rapi, waktu admin berkurang 60%." },
              { name: "Kios Motor+", quote: "Follow-up servis otomatis bikin repeat order naik 35%." },
              { name: "EduPrime", quote: "Dashboard KPI bikin keputusan mingguan lebih cepat & tepat." },
            ].map((t, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -4, scale: 1.01 }} className="rounded-2xl bg-white border border-black/10 p-6 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-black/10 bg-[#f1f5f9] grid place-items-center">
                    <span className="text-xl">🏢</span>
                  </div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-black/60">Klien</div>
                  </div>
                </div>
                <blockquote className="mt-4 italic text-black/80">“{t.quote}”</blockquote>
                <div className="mt-3 text-amber-400">⭐⭐⭐⭐⭐</div>
              </motion.div>
            ))}
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
            <motion.h2 variants={fadeUp} className="font-hero-heading font-extrabold text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
              Mulai dari Audit AI Gratis
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-base sm:text-lg text-white/90 font-hero-sub">
              Temukan quick wins dalam 30 menit beserta estimasi dampak ke KPI bisnis.
            </motion.p>
            <motion.ul variants={fadeUp} className="mt-6 space-y-3 text-white/90">
              <li>✅ <span className="font-semibold">Value-driven</span> — fokus ke hasil nyata, bukan sekadar pasang tool</li>
              <li>✅ <span className="font-semibold">Integrasi mulus</span> — CRM, WhatsApp, Sheet, Notion, ecommerce</li>
              <li>✅ <span className="font-semibold">Enablement tim</span> — SOP + training agar solusi dipakai</li>
            </motion.ul>
            <div className="mt-7">
              <motion.button
                type="button"
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary-hero text-center rounded-2xl px-7 py-4 text-lg font-bold inline-block w-full sm:w-auto"
                onClick={handleWhatsAppClick}
              >
                🔥 Jadwalkan Konsultasi
              </motion.button>
              <div className="text-xs text-white/80 mt-2">*Slot terbatas setiap minggu</div>
            </div>
          </div>
          <motion.div variants={fadeUp} className="relative">
            <Image
              src="/images/trophy.webp"
              width={720}
              height={720}
              alt="Ilustrasi hasil bisnis"
              className="mx-auto w-full rounded-2xl"
              sizes="(max-width: 768px) 364px, 400px"
            />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
