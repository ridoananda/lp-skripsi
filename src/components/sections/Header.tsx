"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { fadeIn } from "@/lib/animations";
import { getWhatsAppUrl } from "@/lib/constants";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const url = getWhatsAppUrl();
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
      <motion.header
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="w-full max-w-6xl mx-auto px-6 py-5 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image
              src="/images/logo.webp"
              width={44}
              height={44}
              alt="E-book Skripsi logo"
              className="w-10 h-10 object-cover rounded-lg"
              quality={100}
              priority
              loading="eager"
              fetchPriority="high"
              sizes="44px"
            />
          </Link>
          <span className="text-sm font-medium text-white">
            E-book Skripsi
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
          <motion.a
            href="#harga"
            whileHover={{ y: -1, opacity: 0.9 }}
            whileTap={{ scale: 0.98 }}
            className="hover:underline"
          >
            Harga
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
                <Link href="/">
                  <Image
                    src="/images/logo.webp"
                    width={44}
                    height={44}
                    alt="E-book Skripsi logo"
                    className="w-10 h-10 object-cover rounded-lg"
                    quality={100}
                    priority
                    loading="eager"
                    fetchPriority="high"
                    sizes="44px"
                  />
                </Link>
                <span className="text-sm font-medium text-white">
                  E-book Skripsi
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
              <a
                href="#harga"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-white/10"
              >
                harga
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
    </>
  );
}
