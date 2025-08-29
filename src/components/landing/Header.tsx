"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import Link from "next/link";

import { fadeIn } from "@/lib/animations";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { href: "#nilai", label: "Nilai" },
    { href: "#produk", label: "Produk" },
    { href: "#testimoni", label: "Testimoni" },
  ];

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
          {menuItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={{ y: -1, opacity: 0.9 }}
              whileTap={{ scale: 0.98 }}
              className="hover:underline"
            >
              {item.label}
            </motion.a>
          ))}
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

      {/* Floating WhatsApp CTA Button */}
      <motion.a
        href="https://wa.me/6281234567890?text=Halo min! saya perlu bantuan"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        aria-label="Hubungi kami via WhatsApp"
      >
        <MessageCircle size={24} className="group-hover:scale-110 transition-transform duration-300" />
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-sm font-medium">
          Hubungi WhatsApp
        </div>
      </motion.a>

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
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 rounded-md hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
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
