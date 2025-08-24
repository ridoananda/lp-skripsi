"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

import { fadeIn } from "@/lib/animations";

export default function Header() {
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
          <motion.div
            whileHover={{ y: -1, opacity: 0.9 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
          </motion.div>
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
              <Link
                href="/blog"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-white/10"
              >
                Blog
              </Link>
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
    </>
  );
}
